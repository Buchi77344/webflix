def add(x,y):
    return x + y
def multiply(x,y):
    return x * y
def subtract(x,y):
    return x - y
def division(x,y):
    return x / y

while True:
    print('select an operator')
    print('A, add')
    print('B, subtract')
    print('C, multiply')
    print('D ,divide')
    print('E, Exist')
    choices = (input('enter any choice (A/B/C/D/E)'))
    if  choices == 'E':
        break
    choices in ('A','B','C','D')
    num1 = float(input('Enter any number:'))
    num2 = float(input('Enter any number:'))
    if choices == 'A':
        print(num1 ,'+' , num2, '=' ,add(num1,num2))
    if choices == 'B':
        print(num1 ,'-' , num2, '=' ,subtract(num1,num2))
    if choices == 'C':
        print(num1 ,'*' , num2, '=' ,multiply(num1,num2))





     

