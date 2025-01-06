/**
 * BankAccount
 * Depositing
 * Withdrawing
 * Balance - hidden - encapsulated
 */


class BanckAcount {

    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }


    //Methos to deposit money
    public deposit(amount: number): void {
        if (amount < 0) {
            console.log('Invalid deposit amount');
            return;

        }

        this._balance += amount;
    }

    //Method to withdraw money
    public withdraw(amount: number): void {

        if (amount < 0) {
            console.log('Invalid withdrawal amount');
            return
        }

        if (this._balance - amount < 0) {
            console.log('Insuficient Funds');
            return
        }

        this._balance -= amount;
    }

    // Getter to get the balance of the bank account
    public get balance(): number {
        return this._balance;
    }
}


const myAccount = new BanckAcount(1000);

myAccount.deposit(500);
myAccount.withdraw(200)

console.log("Current Balance: ", myAccount.balance);