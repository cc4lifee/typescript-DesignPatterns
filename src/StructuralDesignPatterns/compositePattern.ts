interface Employee {
    getName(): string;
    getSalary(): number;
    getRole(): string;
}

class Developer implements Employee {

    constructor(
        private name: string, private salary: number
    ) { }

    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }
    getRole(): string {
        return "Developer"
    }
}

class Designer implements Employee {

    constructor(
        private name: string, private salary: number
    ) { }

    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }
    getRole(): string {
        return "Designer"
    }
}

//Composite
interface CompositeEmployee extends Employee {
    addEmployee(employee: Employee): void;
    removeEmployee(employee: Employee): void;
    getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
    private employees: Employee[] = [];

    constructor(private name: string, private salary: number) { }

    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }
    getRole(): string {
        return "Manager"
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee)
    }

    removeEmployee(employee: Employee): void {
        const index = this.employees.indexOf(employee)

        if (index !== -1) {
            this.employees.splice(index, 1)
        }
    }

    getEmployees(): Employee[] {
        return this.employees;
    }

}

//Client Code
let dev1 = new Developer('John Doe', 12000)
let dev2 = new Developer('Jane Doe', 15000)

let designer = new Designer("Mark", 10000);

let manager = new Manager('Michael', 250000);

manager.addEmployee(dev1)
manager.addEmployee(dev2)
manager.addEmployee(designer)

// console.log(manager)

/**
 * Real world implementation 
 * 
 */



interface FileSystemComponent {
    getName(): string;
    getSize(): number;
}

class FileComponent implements FileSystemComponent {
    constructor(
        private name: string,
        private size: number
    ) { }

    getName(): string {
        return this.name
    }
    getSize(): number {
        return this.size
    }
}

interface CompositeFileSystemComponent extends FileSystemComponent {
    addComponent(component: FileSystemComponent): void;
    removeComponent(component: FileSystemComponent): void;
    getComponents(): FileSystemComponent[];
}

class Folder implements CompositeFileSystemComponent {
    private components: FileSystemComponent[] = []
    constructor(private name: string) { }

    addComponent(component: FileSystemComponent): void {
        this.components.push(component)
    }

    removeComponent(component: FileSystemComponent): void {
        const index = this.components.indexOf(component)

        if (index !== -1) {
            this.components.splice(index, 1)
        }
    }

    getComponents(): FileSystemComponent[] {
        return this.components;
    }

    getName(): string {
        return this.name
    }

    getSize(): number {
        return this.components.reduce((total, component) =>
            total + component.getSize(), 0)
    }

}

//Client Code

let file1 = new FileComponent("file1.txt", 500);
let file2 = new FileComponent("file2.txt", 800);
let file3 = new FileComponent("file3.txt", 1200);

let folder = new Folder('My Folder');
folder.addComponent(file1)
folder.addComponent(file2)
folder.addComponent(file3)

console.log(`Folder ${folder.getName()} Contains:`);
folder.getComponents().map((component) => console.log(`- ${component.getName()} with the size of ${component.getSize()}`))

console.log(`Total Size ${folder.getSize()}`);