for x in range(1, 11):
    line = ''
    for y in range(1, 11):
        line += '{:3d} '.format(x*y)
    print(line)
