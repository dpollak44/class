from random import randint


class Die:
    def __init__(self, num_sides):
        self._num_sides = num_sides
        self._value = 1

    def value(self):
        return _value

    def roll(self):
        self._value = randint(1, self._num_sides)
        return self._value

    def __str__(self):
        return f'sides: {self._num_sides} value: {self._value}'


die1 = Die(12)
print(die1)
die1.roll()
print(die1)


class Six_Sided_Die(Die):
    def __init__(self):
        super().__init__(6)

die2 = Six_Sided_Die()
print(die2)
die2.roll()
print(die2)