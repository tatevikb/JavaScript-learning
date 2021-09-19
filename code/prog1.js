
/*
1. Insert a digit and a
number. Check whether the digits contains in the number or not.

Input

5, 2463
4, 6
8, 45689
*/

var dig = 5;
var num = 2463;
//var dig = 4;
//var num = 6;
//var dig = 8;
//var num = 45689;

var found = false
while(num != 0 && !found) {
    if(num %10 == dig) {
  	    console.log("The number contains the digigt.")
        found = true
    }
  num = parseInt(num / 10);
}
if(!found)
    console.log("The number doesn't conain the digit.")

/*
2. Enter a number. Reverse
its first and last digits. Print the new number.

Input

2
13
895796
*/

//var n = 2;
//var n = 13;
var n = 895796;

var last = n % 10;
var first = parseInt(n / 10);

var middle = ''
while(first > 9) {
    middle = (first % 10) + middle
    first = parseInt(first / 10);
}

if(n > 9) {
    n = parseInt(last + middle + first);
}

console.log(n);

/*
3. Enter a number. Find the
difference between its biggest and smallest digits.

Input

5
152
4593653
*/

//var n = 5;
var n = 152;
var n = 4593653;

var max = n % 10;
var min = n % 10;

while(n != 0) {
    if(n % 10 > max)
        max = n % 10;
    if(n % 10 < min)
        min = n % 10;

    n = parseInt(n / 10);
}
console.log(max - min);

/*
4. Insert a number. Print
‘yes’ if the number is prime, ‘no’ otherwise.

Input

401
63
*/

//var n = 401;
var n = 63;
var isPrime = true;

if(n == 1) {
console.log('yes')
}

else if(n > 1) {
    for(var i = 2; i < n; i++) {
        if(n % i == 0)
        isPrime = false;
        break;
    }

    if(isPrime) {
        console.log('yes');
    }
    else {
        console.log('no');
    }
}

else {
    console.log('no');
    }

/*
5. Write a program that reads two strings for playing the game of Rock-Paper-Scissors. If the strings
entered by the user are not  'Paper', 'Rock' or 'Scissors', the program keeps on prompting the user to enter new values.
If valid strings are inserted, repeat the loop, until one of the sides wins. (You can use alert instead of console.log).

Input

“Paper”, “Pen”
“Paper”, “Paper”
“Paper”, “Scissors”
*/


const words = ["Paper", "Rock", "Scissors"]
const inputs = ["Paper", "Pen", "Paper", "Paper", "Paper", "Scissors"]

while(inputs.length != 0) {
    var a = inputs.shift();
    var b = inputs.shift();
    
    while(!words.includes(a) || !words.includes(b) || (a == b)) {
        var a = inputs.shift();
        var b = inputs.shift();
    }

    if((a == "Paper" && b == "Rock") || (a == "Rock" && b == "Sicssors") || (a == "Sicssors" && b == "Paper")) {
        //alert("The first player won.")
        break;
    }
    else {
        //alert("The second player won.")
        break;
    }
}

/*
6.Given a number n ( n
>= 0 ). Print n Fibonacci
number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1
+ ak-2)

Input

0
2
10
20
*/

//var n = 0;
//var n = 2;
//var n = 10;
var n = 20;

const fibonacci = [] 
var res = 0;

if(n == 0 || n == 1) {
    res = n;
}
else if(n > 1) {
fibonacci[0] = 0;
fibonacci[1] = 1;

for(var i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    res = fibonacci[i];
}
}
console.log(res);

/*
7. Given a number n
( n > 0 ). Print Fibonacci
series up to n.

Input

7
45
*/

//var n = 7;
var n = 45;

const f = [] 
var s = '';

if(n == 0) {
    s += n + ' ';
    console.log(s);
}
else if(n > 0) {
    f[0] = 0;
    s += f[0] + ' ';
    f[1] = 1;
    s += f[1] + ' ';

    for(var i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
        if(f[i] <= n) {
            s += f[i] + ' ';
        }
        else
            break;
    }
    console.log(s);
}


/*
8. Write a program, to
calculate the value of the following sequence:
1 - 1/3 + 1/5 - 1/7 + 1/9 + ….. + * 1/n .
*/

var sum = 0;
var sign = 1;
for(let i = 1; i <= n; i += 2) {
    sum += sign * (1 / i);
    sign = -sign;
}
console.log(sum);


/*
9.  Write a
program which will give you all of the potential combinations of a
two-digit decimal combination, printed in a comma delimited format

            ‘00’,
‘01’, ‘02’, …, ‘98’, ‘99’.
*/

//The first version of solution
var s = '';
for(let i = 0; i <= 9; i++) {
    for(let j = 0; j <= 9; j++) {
        if(i == 9 && j == 9) {
            s += '\''+ i + j + '\'. ';
        }
        else
        s += '\''+ i + j + '\', ';
    }
}
console.log(s);

//The second version of solution

var nums = []
for(let i = 0; i < 100; ++i) {
    let e = '' + i
    if(i < 10)
        e = '0' + e
    nums.push(e)
}

console.log(nums)


/*
10. Insert a number.
Calculate product and sum of the digits of the number. If product is divisible
by the sum, print the quotient, otherwise print the remainder.

Input

1233
5
0
455
*/

//var n = 1233;
//var n = 5;
//var n = 0;
var n = 455;

if(n != 0) {
    var product = 1;
    var sum = 0;
    
    while(n != 0) {
        let rem = n % 10;
        product *= rem;
        sum += rem;
        n = (n - rem) / 10;
    }

    let rem = product % sum
    if(rem == 0) {
        console.log(product / sum);
    }
    else {
        console.log(rem);
    }
}
else {
    console.log('Dividing by 0 is not allowed');
}
