abstract class Shape {
    abstract calculateArea(): number;

}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super()
    }

    public calculateArea(): number {
        return this.width * this.height;
    }

}

class Square extends Shape {
    constructor(public side: number) {
        super()
    }

    public calculateArea(): number {
        return this.side * this.side;
    }
}

// Client Code
function area(shape: Shape) {
    return shape.calculateArea()
}

let rectangle = new Rectangle(10, 12)
let square = new Square(8)

let rectangleArea = area(rectangle);
let squareArea = area(square);

// console.log(rectangleArea); //120
// console.log(squareArea); //64

// =========================================

abstract class PaymentProcessor {
    abstract processPayment(amount: number): void;
}


class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Credit Card Payments - Amount ${amount}`);
    }
}

class DebitCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Debit Card Payments - Amount ${amount}`);
    }
}

class PaypalProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Paypal Payments - Amount ${amount}`);
    }
}

class BitcoinProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Bitcoin Payments - Amount ${amount}`);
    }
}

function executePayment (paymentProcessor: PaymentProcessor, amount:number): void {
   paymentProcessor.processPayment(amount)
}

let creditCardProcessor = new CreditCardProcessor();
let debitCardProcessor = new DebitCardProcessor();
let paypalProcessor = new PaypalProcessor();
let bitcoinProcessor = new BitcoinProcessor();

executePayment(creditCardProcessor, 100)
executePayment(debitCardProcessor, 50)
executePayment(paypalProcessor, 150)
executePayment(bitcoinProcessor, 150)