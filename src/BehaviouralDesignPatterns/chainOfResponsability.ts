// // Handler interface with updated handle method to return string | null.
// interface AnimalHandler {
//     setNext(handler: AnimalHandler): AnimalHandler;
//     handle(request: string): string | null;
// }

// // Abstract handler with handle method implementation updated.
// abstract class AbstractAnimalHandler implements AnimalHandler {
//     private nextHandler: AnimalHandler | null = null;

//     public setNext(handler: AnimalHandler): AnimalHandler {
//         this.nextHandler = handler;
//         // Returning a handler from setNext will allow
//         // us to link handlers in a convenient way
//         // like this: monkey.setNext(squirrel).setNext(dog);
//         return handler;
//     }

//     public handle(request: string): string | null {
//         if (this.nextHandler) {
//             return this.nextHandler.handle(request);
//         }
//         return null;
//     }
// }

// class MonkeyHandler extends AbstractAnimalHandler {
//     public handle(request: string): string | null {
//         if (request === "Banana") {
//             return `Monkey: I'll eat the ${request}.`;
//         }
//         return super.handle(request);
//     }
// }

// class SquirrelHandler extends AbstractAnimalHandler {
//     public handle(request: string): string | null {
//         if (request === "Nut") {
//             return `Squirrel: I'll eat the ${request}.`;
//         }
//         return super.handle(request);
//     }
// }

// class DogHandler extends AbstractAnimalHandler {
//     public handle(request: string): string | null {
//         if (request === "MeatBall") {
//             return `Dog: I'll eat the ${request}.`;
//         }
//         return super.handle(request);
//     }
// }

// // Client Code
// function clientAnimalCode(handler: AnimalHandler) {
//     const foods = ["Nut", "Banana", "Cup of coffee", "MeatBall"];

//     for (const food of foods) {
//         console.log(`Who wants a ${food}?`);

//         const result = handler.handle(food);
//         if (result) {
//             console.log(`${result}`);
//         } else {
//             console.log(`${food} was left untouched.`);
//         }
//     }
// }
// // Create individual handlers.
// const monkey = new MonkeyHandler();
// const squirrel = new SquirrelHandler();
// const dog = new DogHandler();

// // Link the handlers in the chain: monkey -> squirrel -> dog
// monkey.setNext(squirrel).setNext(dog);

// // Use the client code to process the array of foods starting with the monkey handler.
// clientAnimalCode(monkey);

/**
 * Real world implementation
 */

class Order {
    public isValid() {
        return true
    }

    public applyDiscount() {
        //Discount
    }

    public processPayment() {
        // Process payment
        return true;
    }

    public ship() {
        //shipping order
    }
}

interface Handler {
    setNext(handler: Handler): Handler;
    handle(order: Order): string | null;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(order: Order): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(order)
        }
        return null;
    }
}

class ValidationHandler extends AbstractHandler {
    public handle(order: Order): string | null {
        if (order.isValid()) {
            return super.handle(order)
        }
        return `Validation Failed`
    }
}

class DiscountHandler extends AbstractHandler {
    public handle(order: Order): string | null {
        order.applyDiscount();
        return super.handle(order)
    }
}

class PaymentHandler extends AbstractHandler {
    public handle(order: Order): string | null {
        if (order.processPayment()) {
            return super.handle(order)
        }
        return `Payment Failed`
    }
}

class ShippingHandler extends AbstractHandler {
    public handle(order: Order): string | null {
        order.ship()
        return `Order proccesed and shipped`
    }
}

//Client code
const order = new Order();
const orderHandler = new ValidationHandler();

orderHandler.setNext(new DiscountHandler()).setNext(new PaymentHandler()).setNext(new ShippingHandler())

console.log(orderHandler.handle(order));