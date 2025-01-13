// Example

interface Builder {
    setPartA(): void
    setPartB(): void
    setPartC(): void
}

class Product {
    private parts: string[] = [];

    public add(part: string): void {
        this.parts.push(part);
    }

    public listParts(): void {
        console.log(`Product Parts: ${this.parts.join(", ")}`);
    }

}

class ConcreteBuilder implements Builder {

    private product!: Product;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product();
    }

    public setPartA(): void {
        this.product.add('PartA');
    }

    public setPartB(): void {
        this.product.add('PartB');
    }

    public setPartC(): void {
        this.product.add('PartC');
    }

    public getProduct(): Product {
        const result = this.product;
        this.reset();

        return result;
    }

}

class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimunProduct(): void {
        this.builder.setPartA();
    }

    public buildFullProduct(): void {
        this.builder.setPartA()
        this.builder.setPartB()
        this.builder.setPartC()
    }
}

// const builder = new ConcreteBuilder();
// const director = new Director();

// director.setBuilder(builder);
// director.buildMinimunProduct();

// let minimunProduct = builder.getProduct();
// // console.log(minimunProduct);

// director.buildFullProduct();
// let fullProduct = builder.getProduct()
// // console.log(fullProduct);


/**
 * RealWorld Example
 * 
 */


interface ICustomer {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

interface ICustomerBuilder {
    setFirstName(firstName: string): ICustomerBuilder;
    setLastName(lastName: string): ICustomerBuilder;
    setEmail(email: string): ICustomerBuilder;
    setPhoneNumber(phoneNumber: string): ICustomerBuilder;
    build(): ICustomer;
}

class Customer implements ICustomer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string
    ) { }
}

class CustomerBuilder implements ICustomerBuilder {
    private firstName: string = "";
    private lastName: string = "";
    private email: string = "";
    private phoneNumber: string = '';

    public setFirstName(firstName: string): ICustomerBuilder {
        this.firstName = firstName;
        return this;
    }

    public setLastName(lastName: string): ICustomerBuilder {
        this.lastName = lastName;
        return this;
    }

    public setEmail(email: string): ICustomerBuilder {
        this.email = email;
        return this;
    }

    public setPhoneNumber(phoneNumber: string): ICustomerBuilder {
        this.phoneNumber = phoneNumber;
        return this;
    }

    public build(): ICustomer {
        return new Customer(
            this.firstName,
            this.lastName,
            this.email,
            this.phoneNumber,
        )
    }
}

class CustomerDirector {
    constructor(private builder: ICustomerBuilder) { }

    public buildMinimalCustomer(
        firstName: string,
        lastName: string,
        email: string,
    ) {
        return this.builder
            .setFirstName(firstName).setLastName(lastName).setEmail(email).build()
    }
}

const builder: ICustomerBuilder = new CustomerBuilder()
const director: CustomerDirector = new CustomerDirector(builder)
const customer: ICustomer = director.buildMinimalCustomer('Cristhian', 'Camacho', 'cristhian@gmail.com')
console.log(customer);