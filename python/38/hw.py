name = 'Donald Trump'
address = '1600 Pennsylvania Ave Washington D.C. 12345'
children = ['Ivanka', 'Jared', 'Barron', 'Donald Jr']

print(f'Name: {name}\nAddress: {address}\nChildren: {children}')

print(name[:: 3])
# print(children[len(children) - 2])
# print(children[-2][1:len(children[-2]) - 1])
print(children[-2][1: -1])


empty_list = [None] * 10
empty_list[1] = 'Sam'
print(empty_list)
