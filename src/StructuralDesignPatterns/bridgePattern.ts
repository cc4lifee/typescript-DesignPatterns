interface MediaPlayerImplementation {
    playAudio(): void;
    playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
    playAudio(): void {
        console.log('Playing audio on Windows Media Player');
    }
    playVideo(): void {
        console.log('Playing video on Windows Media Player');
    }
}

class MacOSMediaPlayer implements MediaPlayerImplementation {
    playAudio(): void {
        console.log('Playing audio on MacOS Media Player');
    }
    playVideo(): void {
        console.log('Playing video on MacOS Media Player');
    }
}

abstract class MediaPlayerAbstraction {
    constructor(protected implementation: MediaPlayerImplementation) { }

    abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
    playFile(): void {
        this.implementation.playAudio()
    }
}

class VideoPlayer extends MediaPlayerAbstraction {
    playFile(): void {
        this.implementation.playVideo()
    }
}


//Client code
let windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
windowsAudioPlayer.playFile()

let macOsVideoPlayer = new VideoPlayer(new MacOSMediaPlayer());
macOsVideoPlayer.playFile()


/**
 * Real world implementation
 */

interface Database {
    connect(): void;
    query(query: string): void;
    close(): void;
}

class PostgresSQLDatabase implements Database {
    connect(): void {
        console.log(`Connecting to PostgreSQL`);
    }
    query(query: string): void {
        console.log(`Executing query: ${query}`);
    }
    close(): void {
        console.log(`Closing connection PostgreSQL`);
    }

}

class MongoDBDabase implements Database {
    connect(): void {
        console.log(`Connecting to MongoDB`);
    }
    query(query: string): void {
        console.log(`Executing query: ${query}`);
    }
    close(): void {
        console.log(`Closing connection MongoDB`);
    }

}

abstract class DatabaseService {
    constructor(protected database: Database) { }

    abstract fetchData(query: string): void;
}

class ClientDatabaseService extends DatabaseService {

    public fetchData(query: string): void {
        this.database.connect();
        this.database.query(query);
        this.database.close();
    }

}

let postgreService = new ClientDatabaseService(new PostgresSQLDatabase());
postgreService.fetchData('SELECT Users')

let mongoDbService = new ClientDatabaseService(new MongoDBDabase());
mongoDbService.fetchData('SELECT Users')