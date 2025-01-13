/**
 * Abstract Pattern Example
 */
interface IProductA {
    operationA(): string;
}

interface IProductB {
    operationB(): string;
    combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
    createProductA(): IProductA;
    createProductB(): IProductB;
}

class ProductA implements IProductA {

    public operationA(): string {
        return 'This is the result of operation A'
    }

}

class ProductB implements IProductB {

    public operationB(): string {
        return 'This is the result of operation B'
    }

    public combinedOperation(collaborator: IProductA): string {

        const result = collaborator.operationA();
        return `The result of Product B collaborating with (${result})`

    }

}

class Factory implements IFactory {

    public createProductA(): IProductA {
        return new ProductA()
    }
    public createProductB(): IProductB {
        return new ProductB()
    }

}

const factory = new Factory();

const productA = factory.createProductA();
// console.log(productA.operationA());

const productB = factory.createProductB();
// console.log(productB.combinedOperation(productA));
// console.log(productB.operationB());


/**
 * Abstract Pattern Real world implementation
 * 
 */

interface Button {
    render(): void;
    onClick(f: Function): void;
}

interface Checkbox {
    render(): void;
    toggle(): void;
}

interface GUIFactory {
    createButton(): Button;

    createCheckbox(button: Button): Checkbox;
}

class WindowsButton implements Button {
    public render(): void {
        console.log('Windows Style button rendered');
    }

    public onClick(f: Function): void {
        console.log('Bind a Windows style button click event');
        f();
    }
}

class WindowsCheckbox implements Checkbox {
    private button: Button;

    constructor(button: Button) {
        this.button = button;
    }

    public render() {
        console.log('WindowsCheckbox rendered');
    }

    public toggle(): void {
        this.button.onClick(() => console.log("WindowsCheckbox state toggled"))
    }
}

class MacOSButton implements Button {
    render() {
        console.log("Render a button in MacOS style");
    }

    onClick(f: Function) {
        console.log("Bind a MacOS style button click event");
        f();
    }
}


class MacOSCheckbox implements Checkbox {
    private button: Button;

    constructor(button: Button) {
        this.button = button;
    }

    render() {
        console.log("Render a checkbox in MacOS style");
    }

    toggle() {
        this.button.onClick(() => console.log("Checkbox state toggled!"));
    }
}

class WindowsFactory implements GUIFactory {

    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(button: Button): Checkbox {
        return new WindowsCheckbox(button);
    }

}

class MacOSFactory implements GUIFactory {

    createButton(): Button {
        return new MacOSButton();
    }

    createCheckbox(button: Button): Checkbox {
        return new MacOSCheckbox(button);
    }

}

// Client Code

function renderUI(factory: GUIFactory) {

    const button = factory.createButton();
    const checkbox = factory.createCheckbox(button);

    button.render();
    checkbox.render();

    button.onClick(() => console.log('Button Clicked'))
    checkbox.toggle();

}

renderUI(new WindowsFactory());
renderUI(new MacOSFactory());