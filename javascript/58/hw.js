(function () {
    'use strict';

    /*const account1 = {
        balance: 0
    };

    const account2 = {
        balance: 0
    };*/

    function createAccount() {
        return {
            balance: 0,
            /*transaction: function (amount) {
                //console.log('in transaction', this);
                this.balance += amount;
                //const foo = amount => this.balance += amount;
                //foo(amount);

            }*/
            //transaction: amount => this.balance += amount
        };
    }

    function transaction(amount) {
        this.balance += amount;
    }

    const account1 = createAccount();
    const account2 = createAccount();

    //const theTransactionFunctionFromAccount1 = account1.transaction;
    //theTransactionFunctionFromAccount1(1);

    /*
    console.log(this);
    account1.transaction(100);
    console.log(account1.balance);
    account2.transaction(500);
    console.log(account2.balance);
    account1.transaction(-50);
    console.log(account1.balance);
    */

    transaction.call(account1, 100);
    console.log(account1.balance);
    transaction.apply(account2, [500]);
    console.log(account2.balance);

    const applyTransactionToAccount2 = transaction.bind(account2);
    applyTransactionToAccount2(-100);
    console.log(account2.balance);

    const add5ToAccount2 = transaction.bind(account2, 5);
    add5ToAccount2();
    add5ToAccount2();
    console.log(account2.balance);

    //account1.transaction.call(account2, 90);
    //console.log(account2.balance);
}());