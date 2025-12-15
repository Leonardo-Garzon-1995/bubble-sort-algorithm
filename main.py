test_list = [1, 7, 5, 3, 2, 4, 8]

def isOrdered(a, b):
    return a <= b

def swapEl(list, index):
    if (not isOrdered(list[index], list[index + 1])):
        temp = list[index]
        list[index] = list[index + 1]
        list[index + 1] = temp
        