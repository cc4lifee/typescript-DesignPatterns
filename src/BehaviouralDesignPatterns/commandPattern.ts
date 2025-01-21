interface ICommand {
    execute(): void;
    undo(): void;
}

class Light {
    public turnOn(): void {
        console.log("The light is on");
    }

    public turnOff(): void {
        console.log("The light is off");
    }
}

class TurnOnCommand implements ICommand {

    constructor(private light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOn();
    }

    public undo(): void {
        this.light.turnOff();
    }
}

class TurnOffCommand implements ICommand {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOff();
    }

    public undo(): void {
        this.light.turnOn();
    }
}

class SimpleRemoteControl {
    private currentCommand!: ICommand;
    private undoCommand!: ICommand;
    private commandQueue: ICommand[] = [];

    public setCommand(command: ICommand): void {
        this.undoCommand = this.currentCommand;
        this.currentCommand = command;
        this.commandQueue.push(command);
    }

    public buttonWasPressed(): void {
        if (this.commandQueue.length) {
            const command = this.commandQueue.shift();
            command?.execute();
        }
    }

    public undoButtonWasPressed(): void {
        this.undoCommand.undo();
    }

    public hasCommands(): boolean {
        return this.commandQueue.length > 0;
    }
}

//Client Code
const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light: Light = new Light();

// Turning on the light
remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();

// Turning off the light
remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();

// Undo last operation (turn the light back on)
remote.undoButtonWasPressed();

// Processing remaining commands in the queue (if any)
while (remote.hasCommands()) {
    remote.buttonWasPressed();
}

console.log('===============');

/**
 * Real World Implementation
 */

interface ICommand {
    execute(): void;
    undo(): void;
}

class MyFileSystem {
    private commandQueue: ICommand[] = [];

    public addCommand(command: ICommand) {
        this.commandQueue.push(command);
    }

    public executeCommand() {
        if (this.commandQueue.length > 0) {
            let command = this.commandQueue.shift();
            command?.execute();
        }
    }

    public undoCommand() {
        if (this.commandQueue.length > 0) {
            let command = this.commandQueue.pop();
            command?.undo();
        }
    }

    hasCommands(): boolean {
        return this.commandQueue.length > 0;
    }
}

class CreateFileCommand implements ICommand {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    execute() {
        console.log(`Creating file at ${this.path}`);
        // Here would be logic for creating a file at the given path
    }

    undo() {
        console.log(`Deleting file at ${this.path}`);
        // Here would be logic for deleting a file at the given path
    }
}

class DeleteFileCommand implements ICommand {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    execute() {
        console.log(`Deleting file at ${this.path}`);
        // Here would be logic for deleting a file at the given path
    }

    undo() {
        console.log(`Restoring file at ${this.path}`);
        // Here would be logic for restoring a file at the given path
    }
}

class UpdateFileCommand implements ICommand {

    constructor(private path: string, private newContent: string, private oldContent: string) {
        this.path = path;
        this.newContent = newContent;
        this.oldContent = oldContent;
    }

    execute() {
        console.log(
            `Updating file at ${this.path} with new content: ${this.newContent}`
        );
        // Here would be logic for updating a file at the given path with the new content
    }

    undo() {
        console.log(
            `Reverting file at ${this.path} to old content: ${this.oldContent}`
        );
        // Here would be logic for reverting the file back to the old content
    }
}

class ReadFileCommand implements ICommand {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    execute() {
        console.log(`Reading file at ${this.path}`);
        // Here would be logic for reading a file at the given path
    }

    undo() {
        console.log(
            `Undo operation not available for reading file at ${this.path}`
        );
        // Reading a file doesn't change its state, so there's nothing to undo
    }
}

let myFileSystem = new MyFileSystem();

// Creating a file
myFileSystem.addCommand(new CreateFileCommand("/path/to/myFile.txt"));

// Updating the file
let updateFileCommand = new UpdateFileCommand(
    "/path/to/myFile.txt",
    "new content",
    "old content"
);
myFileSystem.addCommand(updateFileCommand);

// Reading the file
myFileSystem.addCommand(new ReadFileCommand("/path/to/myFile.txt"));

// Deleting the file
myFileSystem.addCommand(new DeleteFileCommand("/path/to/myFile.txt"));

// Executing commands in the queue
while (myFileSystem.hasCommands()) {
    // assuming `hasCommands` method checks if the queue has commands
    myFileSystem.executeCommand();
}

// Undoing the last command
myFileSystem.undoCommand(); // Undoes the delete command, effectively restoring the file