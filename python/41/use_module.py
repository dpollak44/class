#import my_module

#f = my_module.Foo()
# f.print()

# my_module.bar()

from my_module import Foo, bar

f = Foo()
f.print()

bar()
