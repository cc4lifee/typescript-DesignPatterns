interface PaymentStrategy {
    pay(amount: number): void;
}

class PaypalStrategy implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid ${amount} using Paypal`);
    }
}

class CreditCardStrategy implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid ${amount} using CreditCard`);
    }
}

class BitcoinStrategy implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid ${amount} using Bitcoin`);
    }
}

class ShoppingCart {
    private amount: number = 0;

    constructor(private strategy: PaymentStrategy) { }

    public setPaymentStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    public addToCart(value: number): void {
        this.amount += value;
    }

    public checkout(): void {
        this.strategy.pay(this.amount);
        this.amount = 0;
    }
}

// Client code

let cart = new ShoppingCart(new PaypalStrategy())

// cart.addToCart(100)
// cart.addToCart(50)

// cart.checkout()

// cart.setPaymentStrategy(new CreditCardStrategy())
// cart.addToCart(100);
// cart.checkout()

/**
 * Real world implementation
 */

interface FilterStrategy {
    apply(image: string): void;
}

class GrayscaleStrategy implements FilterStrategy {
    public apply(image: string): void {
        console.log(`Image: ${image} GrayScale`);
    }
}

class SepiaStrategy implements FilterStrategy {
    public apply(image: string): void {
        console.log(`Image: ${image} SepiaStrategy`);
    }
}

class NegativeStrategy implements FilterStrategy {
    public apply(image: string): void {
        console.log(`Image: ${image} NegativeStrategy`);
    }
}

class ImageProcessor {
    constructor(private strategy: FilterStrategy) { }

    public setFilterStrategy(strategy: FilterStrategy): void {
        this.strategy = strategy;
    }

    public applyFilter(image: string): void {
        this.strategy.apply(image)
    }
}

//Client code
const imageProcessor = new ImageProcessor(new GrayscaleStrategy())

imageProcessor.applyFilter("Image.jpg");

imageProcessor.setFilterStrategy(new SepiaStrategy())
imageProcessor.applyFilter("Image2.jpg")