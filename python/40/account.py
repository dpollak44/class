class Account:
    _number_of_accounts = 0
    _next_account_number = 1000

    def __init__(self, account_holder, balance):
        self._account_holder = account_holder
        self._balance = balance
        self._account_number = Account._next_account_number
        Account._next_account_number += 1
        Account._number_of_accounts += 1

    def print(self):
        print(
            f'Account Holder: {self._account_holder} Account Number: {self._account_number} Balance: {self._balance}')

    def __repr__(self):
        return f'Account({self._account_holder}, {self._balance})'

    def __str__(self):
        return f"""
Account Holder: {self._account_holder}
Account Number: {self._account_number}
Balance: {self._balance}"""

    def get_account_holder(self):
        return self._account_holder

    def get_balance(self):
        return self._balance

    def do_transaction(self, amount):
        self._balance += amount

    @classmethod
    def get_number_of_accounts(cls):
        return Account._number_of_accounts


account1 = Account('Joe', 1000)
print(account1)
# account1.print()

account1.do_transaction(100)
print(account1)

print(Account.get_number_of_accounts())
account2 = Account('Bob', 500)
print(Account.get_number_of_accounts())

print(account2)

#account2._balance = 100000000
print(account2)


class MinimumBalanceAccount(Account):
    _minimum_balance = 1000

    def __init__(self, account_holder, balance):
        if balance < MinimumBalanceAccount._minimum_balance:
            raise Exception(
                f'{balance} is below minimum of {MinimumBalanceAccount.minimum_balance}')

        super().__init__(account_holder, balance)

    def do_transaction(self, amount):
        if self._balance + amount < MinimumBalanceAccount._minimum_balance:
            raise Exception(
                f'{self._balance} + {amount} would go below minimum of {MinimumBalanceAccount._minimum_balance}')

        super().do_transaction(amount)


account3 = MinimumBalanceAccount('Sam', 5000)
print(Account.get_number_of_accounts())
print(account3)

#account4 = MinimumBalanceAccount('Donald', 500)
account4 = MinimumBalanceAccount('Donald', 5000)
print(Account.get_number_of_accounts())
print(account4)
# account4.do_transaction(-4500)
account4.foo = 7
print(account4.foo)


class Not_An_Account:
    pass


not_an_account = Not_An_Account()
not_an_account._account_holder = 'Mike'
not_an_account._balance = 1
not_an_account._account_number = 123

# not_an_account.print()

Account.print(not_an_account)

printIt = account4.print

printIt()
