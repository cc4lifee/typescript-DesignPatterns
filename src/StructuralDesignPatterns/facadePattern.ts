class Grinder {
    public grindBeans(): void {
        console.log('Griding beans...');
    }
}

class Boiler {
    public boildWater(): void {
        console.log('Boiling Water...');
    }
}

class Brewer {
    public brewCoffee(): void {
        console.log('Brewing coffe...');
    }
}

class CoffeeMakerFacade {
    constructor(
        private grinder: Grinder,
        private boiler: Boiler,
        private brewer: Brewer
    ) { }

    public makeCoffe() {
        this.grinder.grindBeans();
        this.boiler.boildWater();
        this.brewer.brewCoffee()

        console.log('The coffe is ready');
    }
}

// Client code
let grinder = new Grinder();
let boiler = new Boiler();
let brewer = new Brewer();

let coffeMaker = new CoffeeMakerFacade(grinder, boiler, brewer)
coffeMaker.makeCoffe()

/**
 * Real world implementation
 */

class Amplifier {
    public turnOn(): void {
        console.log('Amplifier Turned On');
    }

    public setVolume(level: number): void {
        console.log(`Volumne at ${level}`);
    }
}

class DvdPlayer {
    public turnOn(): void {
        console.log('DvdPlayer Turned On');
    }

    public play(movie: string): void {
        console.log(`Playing: ${movie}`);
    }
}

class Projector {
    public turnOn(): void {
        console.log('Projector Turned On');
    }

    public setInput(dvdPlayer: DvdPlayer): void {
        console.log('input set to DVDPlayer ');
    }
}

class Lights {
    public dim(level: number): void {
        console.log(`Dim level: ${level}`);
    }
}

class HomeTheaterFacade {
    constructor(
        private amplifier: Amplifier,
        private dvdPlayer: DvdPlayer,
        private projector: Projector,
        private lights: Lights
    ) { }

    public watchMovie(movie: string, volumen: number, level: number) {
        console.log(`Ready to watch movie ${movie}`);

        this.lights.dim(level);

        this.amplifier.turnOn();
        this.amplifier.setVolume(volumen);

        this.dvdPlayer.turnOn();
        this.dvdPlayer.play(movie);

        this.projector.turnOn();
        this.projector.setInput(this.dvdPlayer)

    }
}

let amplifier = new Amplifier();
let dvdPlayer = new DvdPlayer();
let projector = new Projector()
let lights = new Lights()

let homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector, lights);

homeTheater.watchMovie('Interestellar', 20, 3);