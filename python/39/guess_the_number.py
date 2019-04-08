import random

#the_number = random.randint(1, 100)
#print(f'Shhh. The number is {the_number}')
#guess = 0
# while guess != the_number:
#    guess = int(input('Guess the number: '))
# else:
#    print('You win!')

the_number = random.randint(1, 100)
print(f'Shhh. The number is {the_number}')
guess = 0
tries = 0
while guess != the_number:
    try:
        guess = int(input('Guess the number: '))
    except ValueError as e:
        print(e)
        continue

    if guess < 1 or guess > 100:
        print('Guess must be between 1 and 100')
        continue

    tries += 1
    if guess < the_number:
        print('Guess higher')
    elif guess > the_number:
        print('Guess lower')

print(f'You win! It took you {tries} tries')
