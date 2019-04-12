def print_days_in_month():
    months = ["January", "February", "March"]
    days = [31, 28, 31]

    for month, day in zip(months, days):
        print(f'{month} => {day}')


print(print_days_in_month())


def print_days_in_month2():
    # parens not required to make tuple
    months = ("January", "February", "March")
    days = 31, 28, 31

    for month, day in zip(months, days):
        print(f'{month} has {day} days')


def print_days_in_month3():
    months_days = {
        "January": 31,
        "February": 28,
        "March": 31
    }

    for month in months_days:
        print(f'{month} => {months_days[month]}')


print_days_in_month()
print_days_in_month2()
print_days_in_month3()


def get_days_in_month(month: str):
    months_days = {
        "January": 31,
        "February": 28,
        "March": 31
    }

    # return months_days[month]
    return months_days.get(month.title(), 'No such month!')


def get_days_in_month2(month: str) -> int:
    months = ["January", "February", "March"]
    days = [31, 28, 31]

    if month.title() in months:
        index = months.index(month.title())
        return days[index]
    else:
        return 'No such month'


print(get_days_in_month('january'))
print(get_days_in_month('foo'))

print(get_days_in_month2('january'))
print(get_days_in_month2('foo'))

x = 5
print(x)


def use_global():  # globals are bad but...
    global x
    x = 10
    print(x)


use_global()
print(x)

months_days = {
    "January": 31,
    "February": 28,
    "March": 31
}


def print_days_in_month_global():
    for month in months_days:
        print(f'{month} => {months_days[month]}')


def get_days_in_month_global(month: str):
    return months_days.get(month.title(), 'No such month!')


print_days_in_month_global()
print(get_days_in_month_global("January"))

# scope is different then Java
if False:
    y = 5
else:
    y = None
print(y)
