/* Write createBankAccount(initial) that returns an object with deposit and getBalance functions 
sharing a private balance via closure. */

function createBankAccount(initial) {
    let balance = initial;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(250);

account.deposit(150);

console.log(account.getBalance());