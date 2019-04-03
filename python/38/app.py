import math

course_name = 'PCS Programing Course'
print(course_name.find('Course'))
print(course_name.find('course'))

print(course_name.index('Course'))
# print(course_name.index('course'))

some_people = ['Sam', 'Joe', 'Bob']
# print(some_people.find('Sam'))
print(some_people.index('Sam'))

guy_to_find = 'George'

try:
    print(some_people.index(guy_to_find))
except ValueError as e:
    print(f'You searched for someone not in the list - {e}')
except:
    print('OOPS, something went wrong')
else:  # no exception
    print('It worked! We found him!')
finally:
    print('Always see this')

if guy_to_find in some_people:
    print(f'found it at {some_people.index(guy_to_find)}')
    print('Done inside if')
print('Done outside if')

donald = 'Donald Trump'
ivanka = donald.replace('Donald', 'Ivanka')
print(donald, ivanka)
donald = donald.replace('Donald', 'Ivanka')
print(donald, ivanka)

some_numbers = [1, 2, 3]
some_numbers.append(4)
print(some_numbers)
more_numbers = [4, 5, 6]
some_numbers.append(more_numbers)
some_numbers.extend([4, 5, 6])
some_numbers.insert(3, '!')
print(some_numbers)

last_number = some_numbers.pop()
print(last_number, some_numbers)

print(some_numbers.remove(4))  # remove first 4 found, returns None
print(some_numbers)

del(some_numbers[3])  # remove at index
print(some_numbers)

some_numbers.reverse()
print(some_numbers)

another_reference = some_numbers
copy = some_numbers[:]
another_copy = some_numbers.copy()
some_numbers.append('added')
more_numbers.append('added')
print(some_numbers, another_reference, copy, another_copy)
print(id(some_numbers), id(another_reference), id(copy), id(another_copy))

some_numbers.clear()
print(some_numbers)
some_numbers.append(1)
print(some_numbers)

# 'hello'.
print(copy.count(7))

print(10 / 3)
print(10 // 3)  # integer division

print(round(10 / 3))
print(abs(-100))

print(math.ceil(10 / 3))

name = input('What is your name? ')
print(f'Hello {name}')

try:
    age = int(input('How old are you? '))
    print(f'You will be 100 in {100 - age} years')
except ValueError as e:
    print(e)

if age > 21:
    print('You can buy alcohol')
elif age < 3:
    print('You cant buy anything')
else:
    print('You picked some other age')

if age >= 18 and age < 65:
    print('You need to pay taxes')
else:
    print('No taxes')

# ternary
message = 'Taxes' if age >= 18 and age < 65 else 'No Taxes'
print(message)

for letter in 'PCS Programming course':
    print(letter)

for number in copy:
    print(number)

for number in range(100):
    print(number)

for number in range(10, 20, 2):  # start, stop, step
    print(number)

print(some_people)
for person in some_people:
    if person == 'Sam':
        print('Found him')
        break
else:  # got through for without a break
    print('Didnt find him')
