// EXAMPLE

interface UserDetails {
    name: string;
    age: number;
    email: string;
}

interface Prototype {
    clone(): Prototype;
    getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
    constructor(private user: UserDetails) { }

    public clone(): Prototype {
        const clone = Object.create(this)
        clone.user = { ...this.user }
        return clone;
    }

    public getUserDetails(): UserDetails {
        return this.user
    }
}


let user1 = new ConcretePrototype({ name: 'Cris', age: 25, email: 'cristhian@gmail.com' })

let user2 = user1.clone();

if (user1 === user2) {
    console.log('Both are the same');

} else {
    console.log('Clonec objects are separate instances');
}

/**
 * Real world example
 */


interface ShapeProperties {
    color: string;
    x: number;
    y: number;
}

abstract class Shape {
    constructor(public properties: ShapeProperties) { }

    abstract clone(): Shape;
}

class Rectangle extends Shape {
    constructor(
        properties: ShapeProperties,
        public width: number,
        public height: number) {
        super(properties)
    }

    public clone(): Shape {
        let clonedProperties: ShapeProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y
        }

        return new Rectangle(clonedProperties, this.width, this.height)

    }
}

class Circle extends Shape {
    constructor(
        properties: ShapeProperties,
        public radius: number
    ) {
        super(properties)
    }

    public clone(): Shape {
        let clonedProperties: ShapeProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y

        }

        return new Circle(clonedProperties, this.radius)

    }
}

let redRectangle: Shape = new Rectangle(
    {
        color: "red",
        x: 20,
        y: 100
    },
    10, 20
)

let anotherRectangle: Shape = redRectangle.clone()

anotherRectangle.properties.color = "blue";

console.log(redRectangle);
console.log(anotherRectangle);