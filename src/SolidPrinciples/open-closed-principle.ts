/**
 * Discounts : 
 * Regular - 10 
 * Premium - 20
 * Gold - 30
 */

//bad code
// class Discount {

//     giveDiscount(customerType: 'premium' | 'regular'):number {

//         if (customerType === 'regular') {
//             return 10;


//         } else if (customerType === 'premium') {
//             return 20;

//         } else {
//             return 10;
//         }

//     }

// }


//good code

interface Customer {
    giveDiscount(): number;

    addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
    giveDiscount(): number {
        return 10;
    }

    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent
    }
}

class PremiumCustomer implements Customer {
    giveDiscount(): number {
        return 20;
    }

    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 2;
    }
}

class GoldCustomer implements Customer {
    giveDiscount(): number {
        return 30;
    }

    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 3;
    }
}

class Discount {
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount()
    }
}

let premiumCustomer: PremiumCustomer = new PremiumCustomer();
let goldCustomer: GoldCustomer = new GoldCustomer();
let discount: Discount = new Discount()

let premiumValue = discount.giveDiscount(premiumCustomer)
let goldValue = discount.giveDiscount(goldCustomer)

console.log(premiumValue);
console.log(goldValue);