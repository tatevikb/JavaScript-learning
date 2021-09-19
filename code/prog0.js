'strict mode';

/*
1. Given two variables,
which are the angles of a triangle. Find the third angle of the triangle. (Sum
of the angles of a triangle equals 180 degrees).

Input
45, 90
30, 30
75, 25
*/

const thirdAngle = function(angle1, angle2) {
    return 180 - angle1 - angle2
}

const firstTask = function() {
    const c0 = thirdAngle(45, 90)
    console.log(c0)

    const c1 = thirdAngle(30, 30)
    console.log(c1)

    const c2 = thirdAngle(75, 25)
    console.log(c2)
}

/*
2. Given number n (positive integer). Print the value of
n + nn + nnn(not multiplication).
Input

3
17
100
*/

const sumOfConc = function(n) {
    const nn = '' + n + n
    const nnn = nn + n
    const sum = n + (+nn) + (+nnn)
    return sum
}

const secondTask = function() {
    const c0 = sumOfConc(3)
    console.log(c0)

    const c1 = sumOfConc(17)
    console.log(c1)

    const c2 = sumOfConc(100)
    console.log(c2)
}

/*
3. Given a positive
integer. Bring the last digit of the number to the beginning. Print the new
number. If the last digit of the inserted number is 0, the number remains the same.
Input

367
1002
250
8
*/

//The first solution
const moveLastDigFront1 = function(n) {
    if(n < 10 || n % 10 == 0)
    return n

    const quotient = parseInt(n / 10)
    const remainder = n % 10
    return '' + remainder + quotient
}

//The second solution
const moveLastDigFront2 = function(n) {
    if(n < 10 || n % 10 == 0)
    return n

    n = '' + n
    return n.substring(n.length, n.length - 1) + n.substring(0, n.length - 1)
}

const thirdTask = function() {
    //const moveLastDigFront = moveLastDigFront1
    const moveLastDigFront = moveLastDigFront2

    const c0 = moveLastDigFront(367)
    console.log(c0)

    const c1 = moveLastDigFront(1002)
    console.log(c1)

    const c2 = moveLastDigFront(250)
    console.log(c2)

    const c3 = moveLastDigFront(8)
    console.log(c3)
}

/*
4. Given five numbers as
input. Calculate and print the average of the numbers(without using arrays).
Input

45, -12, 0, 3, -15
7, 52, -23, 9, -81
*/

const calcAverage = function(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5
}

const forthTask = function() {
    const c0 = calcAverage(45, -12, 0, 3, -15)
    console.log(c0)

    const c1 = calcAverage(7, 52, -23, 9, -81)
    console.log(c1)
}

/*
5. Check if the number is a multiple of 3, 5, or 7 and output the appropriate message.
Input

21
35
13
420
*/

const isMultiple = function(n) {
 return (n % 3 == 0 || n % 5 == 0 || n % 7 == 0) ? true : false
}

const printMessage = function(n) {
    var str = n + ' is a multiple of'

    if(isMultiple(n)) {   
        if(n % 3 == 0) {
           str = str + ' 3 '
        }
        if(n % 5 == 0) {
            str = str + ' 5 '
        }
        if(n % 7 == 0) {
            str = str + ' 7'
        }
        console.log(str)
    }
    else {
        console.log(n + ' is not a multiple of 3 5 or 7')
    }
}

const fifthTask = function() {
    printMessage(21)
    printMessage(35)
    printMessage(13)
    printMessage(420)
}

/*
6.   Given an
age, figure out whether someone is a baby(1 month - 12 months), toddler
(1 year - 2 years), child(3 years - 12 years ), teenager(13 years - 17
years) or adult(18 years and more ). Also check that age in months is
between 1 and 12. 

Input

8, “months”
45, “years”
3, “years”
*/

const DetermineTheAgeGroup = function(age, unit) {
    let ageGroup = 'invalid age'
    
    if(unit === 'months') {
        if(age >= 1 && age <= 12)
            return 'baby'
    }
    else if(unit === 'years') {     
        if(age >= 1 && age <= 2)
            ageGroup = 'todler'
        else if(age >= 3 && age <= 12)
            ageGroup = 'child'
        else if(age >= 13 && age <= 17)
            ageGroup = 'teenager'
        else if(age >= 18 && age <= 117)
            ageGroup = 'adult'
    }
    return ageGroup
}

const sixthTask = function() {
    const c0 = DetermineTheAgeGroup(8, 'months')
    console.log(c0)

    const c1 = DetermineTheAgeGroup(45, 'years')
    console.log(c1)

    const c2 = DetermineTheAgeGroup(3, 'years')
    console.log(c2)
}


/*
7. Given three numbers.
Sort them by ascending order.

Input

45 , 26, 78
-23, -456, 0
*/

const min = function(a, b) {
    return a < b ? a : b
}

const max = function(a, b) {
    return a > b ? a : b
}

const sort = function(a, b, c) {
    const mn = min(a, min(b, c))
    const mx = max(a, max(b, c))
    const md = (a + b + c) - mn - mx
    return (mn + ', ' + md + ', ' + mx)
}

const seventhTask = function() {
    console.log(sort(45 , 26, 78))
    console.log(sort(-23, -456, 0))
}

/* 
8. Percentage
marks obtained by a student in three exams are to be entered to a
computer. An indication of Pass or Fail is given out after the three marks are entered. The criteria for passing are as follows:

a. A student
passes if all three examinations are passed.

b. Additionally
a student may pass if only one subject is failed but the overall average
is greater than or equal to 50.The pass mark for an
individual subject is 40.
Input

65, 70, 60
10, 85, 75
35, 25, 40
20, 40, 40
*/

const passExams = function(first, second, third) {
   
    if((first < 40 && second < 40) || (first < 40 && third < 40) || (third < 40 && second < 40)) {
        return 'failed'
    }

    if(first < 40 || second < 40 || third < 40) {
        if((first + second + third) / 3 >= 50)
             return 'pass'
        else
            return 'failed'
    }

    else
        return 'pass'
}

const eighthTask = function() {
    console.log(passExams(65, 70, 60))
    console.log(passExams(10, 85, 75))
    console.log(passExams(35, 25, 40))
    console.log(passExams(20, 40, 40))
}

/*
9. Find the sign of the product
of three numbers without a multiplication
operator. Display the specified sign.

Input


-14, 5, 0
-8, 9, -6
4, 19, -2 
*/

const signOfTheProdact = function(a, b, c) {
    var s = a < 0 ? 1 : 0
    s += b < 0 ? 1 : 0
    s += c < 0 ? 1 : 0
    return s % 2 == 1 ? 'The sign is negative' : 'The sign is positive'
}

const ninthTask = function() {
    console.log(signOfTheProdact(-14, 5, 0))
    console.log(signOfTheProdact(-8, 9, -6))
    console.log(signOfTheProdact(4, 19, -2 ))
}

/*
10  Write a program which
will compute the area of a rectangular or a triangle after prompting the user
to type the name of the figure name. Also, check that entered numbers are
positive.
For the triangle entered numbers are
height and base.

Input
“triangle”, 6, 7
“rectangle”, 8, 5
“triangle”, 0, 5
*/

const calcArea = function(figure, h, b) {
    var area = h * b;
    
    if(h > 0 && b > 0) {
        if(figure == 'rectangle') {
            return area;
        }
        else if(figure = 'triangle') {
            return area / 2;
        }
    }
    return undefined
}

const tenthTask = function() {
    console.log(calcArea('triangle', 6, 7))
    console.log(calcArea('rectangle', 8, 5))
    console.log(calcArea('triangle', 0, 5))
}

//firstTask()
//secondTask()
//thirdTask()
//forthTask()
//fifthTask()
//sixthTask()
//seventhTask()
//eighthTask()
//ninthTask()
tenthTask()
