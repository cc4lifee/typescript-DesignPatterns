class Rectangle {
    constructor(private width: number, private height: number) { }

    public getWidth() {
        return this.width
    }

    public gethHight() {
        return this.height
    }

    public area(): number {
        return this.width * this.height
    }
}

class Square {
    constructor(private side: number) { }

    public getSide(): number {
        return this.side
    }

    public area(): number {
        return this.side * this.side
    }
}

class SquareToRectangleAdapter {
    constructor(private square: Square) { }

    public getWidth(): number {
        return this.square.getSide()
    }

    public getHeight(): number {
        return this.square.getSide()
    }

    public area(): number {
        return this.square.area()
    }
}

let square = new Square(5);

let adapter = new SquareToRectangleAdapter(square);

// console.log(adapter.getHeight());
// console.log(adapter.getWidth());
// console.log(adapter.area());

/**
 * Real world implementation
 */

class MySQLDataBase {
    public connectToMySQL(uri: string): void {
        console.log(`Connecting to MYSQL at ${uri}`);
    }

    public executeMySQLQuery(query: string): void {
        console.log(`Executing MYSQL Query ${query}`);
    }
}

class PostgreSQLDatabase {
    public connectToPostgreSQL(uri: string): void {
        console.log(`Connecting to PostgreSQL ${uri}`);
    }

    public executePostgreSQLQuery(query: string): void {
        console.log(`Executing PostgreSQL query ${query}`);
    }
}

class DatabaseAdapter {
    constructor(private postgreSQL: PostgreSQLDatabase) { }

    public connectToMySQL(uri: string): void {
        this.postgreSQL.connectToPostgreSQL(uri)
    }

    public executeMySQLQuery(query: string): void {
        this.postgreSQL.executePostgreSQLQuery(query)
    }
}

let database = new DatabaseAdapter(new PostgreSQLDatabase());
database.connectToMySQL("mysql://localhost:3306/mydb")
database.executeMySQLQuery("SELECT * FROM USERS")
