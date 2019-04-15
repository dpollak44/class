from random import randint


def get_random_numbers(how_many, min=0, max=100):
    numbers = []
    for i in range(how_many):
        numbers.append(randint(min, max))
    return numbers


def selection_sort(list):
    first_unsorted = 0

    while first_unsorted < len(list) - 1:
        min_index = first_unsorted

        for i in range(first_unsorted + 1, len(list)):
            if list[i] < list[min_index]:
                min_index = i

        # temp = list[first_unsorted]
        # list[first_unsorted] = list[min_index]
        # list[min_index] = temp
        list[first_unsorted], list[min_index] = list[min_index], list[first_unsorted]
        first_unsorted += 1


numbers = get_random_numbers(10)
print(numbers)
selection_sort(numbers)
print(numbers)


def bubble_sort(list):
    swapped = True
    while swapped:
        swapped = False
        done = 1
        for i in range(0, len(list) - done):
            if list[i] > list[i+1]:
                list[i], list[i+1] = list[i+1], list[i]
                swapped = True
        done += 1


numbers = get_random_numbers(10)
print(numbers)
bubble_sort(numbers)
print(numbers)


def insertion_sort(list):
    for i in range(1, len(list)):
        j = i - 1
        while j >= 0 and list[j + 1] < list[j]:
            list[j + 1], list[j] = list[j], list[j + 1]
            j = j - 1


numbers = get_random_numbers(10)
print(numbers)
insertion_sort(numbers)
print(numbers)


def binary_search(list, what_to_find):
    low_index = 0
    high_index = len(list) - 1

    while low_index <= high_index:
        middle = (low_index + high_index) // 2
        print(f'low {low_index} high {high_index} middle {middle}')
        #middle = low_index + ((high_index - low_index) // 2)

        if list[middle] > what_to_find:
            high_index = middle - 1
        elif list[middle] < what_to_find:
            low_index = middle + 1
        else:
            return middle

    return -1


index_to_find = randint(0, 9)
print(f'looking for {numbers[index_to_find]} at {index_to_find}')

found_index = binary_search(numbers, numbers[index_to_find])
print(f'found {numbers[index_to_find]} at {found_index}')


def binary_search_recursive(list, what_to_find, low_index, high_index):
    if low_index > high_index:
        return -1

    middle = (low_index + high_index) // 2

    if list[middle] > what_to_find:
        return binary_search_recursive(list, what_to_find, low_index, middle - 1)

    if list[middle] < what_to_find:
        return binary_search_recursive(list, what_to_find, middle + 1, high_index)

    if list[middle] == what_to_find:
        return middle


print(f'looking for {numbers[index_to_find]} at {index_to_find}')
found_index = binary_search_recursive(
    numbers, numbers[index_to_find], 0, len(numbers) - 1)
print(f'found {numbers[index_to_find]} at {found_index}')
