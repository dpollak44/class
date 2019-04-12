from random import randint
import account

numbers = []
for i in range(10):
    numbers.append(randint(1, 100))


print('unsorted', numbers)
print('sorted', sorted(numbers))
print('after', numbers)
numbers = sorted(numbers)
print('after2', numbers)

numbers.clear()
for i in range(10):
    numbers.append(randint(1, 100))


print('unsorted', numbers)
numbers.sort()
print('after', numbers)


print(sorted('Donald Trump'))

print(sorted(['Z', 'a'], key=str.lower))

account1 = account.Account('Alice', 2000)
account2 = account.Account('Bob', 1000)
account3 = account.Account('Charlie', 3000)

print(account1.__repr__())

accounts = [account3, account2, account1]
print('before', accounts)
print('sorted by name', sorted(
    accounts, key=lambda account: account.get_account_holder()))
print('sorted by balance', sorted(
    accounts, key=lambda account: account.get_balance()))
