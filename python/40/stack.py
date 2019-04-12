# False = 0 '' None []
# True = anything else

# LIFO


class Stack:
    def __init__(self):
        self._values = []

    def push(self, value):
        self._values.append(value)

    def pop(self):
        return self._values.pop()

    def peek(self):
        return self._values[-1] if self._values else None


stack = Stack()
for i in range(10):
    stack.push(i)

while stack.peek() != None:
    print(stack.pop())

print(stack.pop())
