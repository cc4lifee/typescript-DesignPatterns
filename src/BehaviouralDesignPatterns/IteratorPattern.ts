class ArrayIterator<T> {
    private position: number = 0;
    constructor(private collection: T[]) { }

    public next(): T {
        //Get the next element in the collection
        const result: T = this.collection[this.position];
        this.position += 1;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

//Client code

// const array: number[] = [1,2,3,4,5,6];
// const iterator = new ArrayIterator<number>(array)
// console.log(iterator.hasNext());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.hasNext());

// const arrayString = ['Hello', 'World'];

// const stringIterator = new ArrayIterator<string>(arrayString);

// console.log(stringIterator.next());
// console.log(stringIterator.next());
// console.log(stringIterator.hasNext());


/**
 * real world implementation 
 */

class User {
    constructor(public name: string) { }
}

interface MyIteratorResult<T> {
    value: T | null;
    done: boolean;
}

interface MyIterator<T> {
    next(): MyIteratorResult<T>;
    hasNext(): boolean;
}

interface Collection<T> {
    createIterator(): MyIterator<T>;
}

class UserCollection implements Collection<User> {

    constructor(private users: User[]) { }

    public createIterator(): MyIterator<User> {
        return new UserIterator(this)
    }

    public getItems(): User[] {
        return this.users;
    }
}

class UserIterator implements MyIterator<User> {
    private collection: UserCollection;
    private position: number = 0;

    constructor(collection: UserCollection) {
        this.collection = collection;
    }

    public hasNext(): boolean {
        return this.position < this.collection.getItems().length;
    }

    public next(): MyIteratorResult<User> {
        if (this.hasNext()) {
            {
                return {
                    value: this.collection.getItems()[this.position++],
                    done: false
                }
            }

        } else {
            return {
                value: null, done: true
            }
        }
    }
}

//client code
const users = [new User("Alice"), new User('Bob'), new User('Cris')];

//Convert array of users into a collection
const userCollection = new UserCollection(users)

//Create an iterator
const iterator = userCollection.createIterator();

console.log(iterator.next());
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.next());