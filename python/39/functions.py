import random

# def increment(number, by):
# def increment(number, by=1):


def increment(number: int, by: int = 1) -> int:
    print('In increment function', number, by)
    # return str(number + by)
    return number + by


print(increment(5))
print(increment(number=5, by=2))
print(increment(by=2, number=5))
print(increment('a', 'b'))


some_numbers = [1, 2, 3]
#x = some_numbers[0]
#y = some_numbers[1]
#z = some_numbers[2]
x, y, z = some_numbers  # unpacking
print(x, y, z)

some_numbers.extend([4, 5, 6])
#x, y, z = some_numbers
x, y, z, *the_middle_ones, the_last = some_numbers
print(x, y, z, the_middle_ones, the_last)


def add(numbers):
    total = 0
    for i in numbers:
        total += i
    return total


#print(add([1, 2, 3]))
# print(add(1, 2, 3)) # wont work
print(add((1, 2, 3)))  # manually pack in tuple


def add2(*numbers):  # tells it to expect tuple
    total = 0
    for i in numbers:
        total += i
    return total


print(add2(1, 2, 3))


def add_user(**user):
    print(user)
    print(user.get('name', 'no name'))


add_user(name="Joe", age=21, email="joe@gmail.com")
add_user(size=52)
# it = {
#    'foo': 'bar'
# }
# add_user(it)


print(random.choice(some_numbers))


def choice(seq):
    x = random.randint(0, len(seq) - 1)
    return seq[x]


for x in range(20):
    print(choice(some_numbers))
