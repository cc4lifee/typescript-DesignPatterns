interface Coffe {
    cost(): number;
    description(): string;
}

class SimpleCoffe implements Coffe {
    cost(): number {
        return 10;
    }

    description(): string {
        return 'Simple Coffe'
    }
}

abstract class CoffeDecorator implements Coffe {

    constructor(protected coffe: Coffe) { }

    abstract cost(): number;
    abstract description(): string;
}

class MilkDecorator extends CoffeDecorator {
    constructor(coffe: Coffe) {
        super(coffe);
    }

    cost(): number {
        return this.coffe.cost() + 2
    }

    description(): string {
        return `${this.coffe.description()}, with milk`
    }
}

// let coffe: Coffe = new SimpleCoffe();
// // coffe = new MilkDecorator(coffe);
// console.log(`Cost: ${coffe.cost()}`);
// console.log(`Description: ${coffe.description()}`);

/**
 * Real world implementation
 */


interface ServerRequest {
    handle(request: any): void;
}

class BaseServer implements ServerRequest {
    handle(request: any): void {
        console.log("Handling Request", request);
    }
}

abstract class ServerRequestDecorator implements ServerRequest {
    constructor(protected serverRequest: ServerRequest) { }
    abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
    public handle(request: any): void {
        console.log("Logging Request: ", request);
        this.serverRequest.handle(request)
    }
}

class AuthMiddleware extends ServerRequestDecorator { 
    public handle(request:any):void {
        if (request.isAuthenticated) {
            console.log('Request is authenticated');
            this.serverRequest.handle(request)
        } else {
            console.log('Unauthorized Access');
        }
    }
}

const request = {
    isAuthenticated:true,
    body:'Hello world'
}

let server: ServerRequest = new BaseServer();
server = new LoggingMiddleware(server)
server = new AuthMiddleware(server)
server.handle(request)