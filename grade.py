def generate_grade(score):
    if 70 <= score <= 100:
        return "A"
    elif 60 <= score <= 69:
        return "B"
    elif 50 <= score <= 59:
        return "C"
    elif 40 <= score <= 49:
        return "D"
    elif 0 <= score <= 39:
        return "F"
    else:
        return " invalid "



while True:
    num1 = input( f"Enter any number(type  'buchi' to exit from the program):")
    # value = num1
    # print(value)
    if num1.lower()== 'buchi':
        print ('exit program')
        break
    grade = generate_grade(int(num1))
    print(f'The grade is {grade}')

    # grade = generate_grade(num1)
    # print(f'the grade is {grade}')
