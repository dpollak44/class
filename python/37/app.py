print("Hello World")
x: int = 5  # type annotation, help reader
print(x, type(x))
# - mypy linter will complain switching types (even without type annotation)
x = 'Hello'
print(x, type(x))
y = 1.5
print(y, type(y))
z = True
print(z, type(z))

my_long_variable_name = 5

very_big_int = 4378543568475478546754967674986754684988754875648578455786856
print(very_big_int)

print(id(very_big_int))
very_big_int += 1  # very_big_int++
print(id(very_big_int))

students = ['Donald', 'Mike', 'Jared', 'Ivanka', 'Melania']
print(students)

name = students[0]

print(len(name))
print(len(students))
print(len(students[1]))

print(students[-1])

print('*' * 10)

print(name[2:])  # default to = string length
print(name[:2])  # default start = 0
print(name[::2])  # default start 0, default end length, step
print(name[1:6:2])

some_people = students[1:4:2]
print(some_people)

print('single "quote\'s" \\ \n Another line')
print("double 'quote\"s'")

print('one' 'two'
      'three' 'four')


print('before')
print('''
Line One
Line Two
Line Three
''')
print('after')

print('before')
print('''Line One
Line Two
Line Three''')
print('after')

numbers = [1, 2, 3, 4, 5]
more_numbers = numbers * 2
print(more_numbers)

numbers.append(6)
print(numbers)

print(name.lower())
print(name.upper())
print('here are some a words'.title())

first_name = 'Donald'
last_name = 'Trump'

print(f'First Name: {first_name} Last Name: {last_name}')
print('First Name: {} Last Name: {}'.format(first_name, last_name))
