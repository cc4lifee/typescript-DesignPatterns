//Factory Pattern example

abstract class Car {

    constructor(
        public model: string,
        public productionYear: number,
    ) { }

    abstract displayCarInfo(): void;

}

class Sedan extends Car {

    public displayCarInfo(): void {
        console.log(`This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class SUV extends Car {

    public displayCarInfo(): void {
        console.log(`This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class Hatchback extends Car {

    public displayCarInfo(): void {
        console.log(`This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class CarFactrory {
    public createCar(
        type: "sedan" | "suv" | "hatchback",
        model: string,
        productionYear: number
    ): Car {

        switch (type) {
            case "sedan":
                return new Sedan(model, productionYear);

            case "suv":
                return new SUV(model, productionYear);

            case "hatchback":
                return new Hatchback(model, productionYear);

            default:
                throw new Error("Invalid Car Type")
        }
    }
}


const carFactory = new CarFactrory();

const sedan = carFactory.createCar("sedan", "Camry", 2023);
// sedan.displayCarInfo()

const suv = carFactory.createCar("suv", "RAV4", 2023);
// suv.displayCarInfo()

const hatchback = carFactory.createCar("hatchback", "Yaris", 2023);
// hatchback.displayCarInfo()


/**
 * Factory Pattern Real World Implementation
 */

abstract class PaymentProcessor {
    constructor(public amount: number) { }

    abstract processPayment(): void
}

class Paypal extends PaymentProcessor {

    public processPayment(): void {
        console.log(`Paypal Payment, amount: ${this.amount}`);
    }
}

class Stripe extends PaymentProcessor {

    public processPayment(): void {
        console.log(`Stripe Payment, amount: ${this.amount}`);
    }
}

class BankTransfer extends PaymentProcessor {

    public processPayment(): void {
        console.log(`BankTransfer Payment, amount: ${this.amount}`);
    }
}

class PaymentProcessorFactory {
    public createProcessor(type: "Paypal" | "Stripe" | "BankTransfer", amount: number): PaymentProcessor {

        switch (type) {
            case "Paypal":
                return new Paypal(amount)

            case "Stripe":
                return new Stripe(amount)

            case "BankTransfer":
                return new BankTransfer(amount)
        }
    }

}

const processorFactory = new PaymentProcessorFactory()

const paypalMethod = processorFactory.createProcessor("Paypal", 200);
paypalMethod.processPayment()

const bankTransferMethod = processorFactory.createProcessor("BankTransfer", 1500);
bankTransferMethod.processPayment()


