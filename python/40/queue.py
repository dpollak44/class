# another comment
# FIFO


class Queue:
    def __init__(self):
        self._values = []

    def push(self, value):
        self._values.append(value)

    def pop(self):
        return self._values.pop(0)

    def peek(self):
        return self._values[0] if self._values else None


queue = Queue()
for i in range(10):
    queue.push(i)

while queue.peek() != None:
    print(queue.pop())

print(queue.pop())
