/*
1. Given a sentence with missing words and an array of words. 
Replace all ‘_’ in a sentence with the words from the array.

Input
“_, we have a _.”
[“Houston”, “problem”]

“If at _ you don’t _, try, try _.”
[“first”, “succeed”, “again”]

“May the _ _ _ _.”
[“Force”, “be”, “with”, “you”]
*/

const replaceUnderscores = function(str, arr) {
    for(let i = 0; i < arr.length; i++) {
        str = str.replace('_', arr[i]);
    }

    return str;
}

var str1 = "_, we have a _.";
var arr1 = ["Houston", "problem"];
console.log(replaceUnderscores(str1, arr1));

var str2 = "If at _ you don’t _, try, try _.";
var arr2 = ["first", "succeed", "again"];
console.log(replaceUnderscores(str2, arr2));

var str3 = "May the _ _ _ _.";
var arr3 = ["Force", "be", "with", "you"];
console.log(replaceUnderscores(str3, arr3));

/*
2. Given mixed an array of numbers, strings, booleans, nulls, and undefined.

Filter array and get
all the numbers in a separate array. Arrange them such as from the beginning
are the odds and from the ending the evens.

Input
[8, 0, 1, ‘hey’, 12, 5 , true, ‘2’, null, 7, 3]
[8, 8, ‘meh’, 6]
[null, null, 1, undefined, 5, 9, false]
*/

const isOdd = function(x) {
    return (x & 1) ? true : false;
}

const filterArr = function(arr) { 
    arr = arr.filter(item => typeof item === 'number');
    let arrOdd = [];
    let arrEven = [];
    for(let i = 0; i < arr.length; i++) {
        if(isOdd(arr[i])) {
            arrOdd.push(arr[i]);
        }
        else {
            arrEven.push(arr[i]);
        }
    }
    return arrOdd.concat(arrEven);
}

var arr1 = [8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3]
console.log(filterArr(arr1));

var arr2 = [8, 8, 'meh', 6]
console.log(filterArr(arr2));

var arr3 = [null, null, 1, undefined, 5, 9, false]
console.log(filterArr(arr3));


/*
3. Given an array of strings and numbers. Print the number of integers and the number
of strings in the array.

Input
[1, ‘10’, ‘hi’, 2, 3]
[1, 4, ‘i am a string’, ‘456’]
*/

const printNums = function(arr) {
    let numInt = 0;
    let numStr = 0;

    for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === 'number') {
            numInt++;
        }
        else 
            numStr++;
    }
    return [numInt, numStr];
}

var arr1 = [1, '10', 'hi', 2, 3];
var arr2 = [1, 4, 'i am a string', '456'];

console.log(printNums(arr1));
console.log(printNums(arr2));

/*
4. Given an array of strings. Find the strings with maximum and minimum lengths in an array. Print the sum of their lengths.

Input
[“anymore”, “raven”, “me”, “communicate”]
[“wish”, “slightly”, “understand”, “longer”, “unexpected”, “heart”]

*/

const sumOfMinMaxStrLenghts = function(arr) {
    let minLen = arr[0].length;
    let maxLen = arr[0].length;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length > maxLen)
            maxLen = arr[i].length;
        if(arr[i].length < minLen)
            minLen = arr[i].length;
    }
    return minLen + maxLen;
}

var a1 = ["anymore", "raven", "me", "communicate"];
var a2= ["wish", "slightly", "understand", "longer", "unexpected", "heart"];
console.log(sumOfMinMaxStrLenghts(a1));
console.log(sumOfMinMaxStrLenghts(a2));

/*
5. Given an array of numbers and a number. Find the index of a first element that is equal to that number. 
If there is not such a number, that find the index of the first element which is the closest to it.

Input
[21,  -9, 15, 2116, -71, 33],
-71
[ 36, -12, 47, -58, 148, -55, -19, 10], -56
[5, 46, 17, -2, 89, 0, 26  ] 36

*/

const findIndexOfNum = function(arr, num) {
    const closest = (a, b) => {
        let da = Math.abs(a - num);
        let db = Math.abs(b - num);
        return da < db ? a : b;
    }

    let closestIndex = 0;
    let closestValue = arr[0];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] == num) {
            return i;
        }

        let cv = closest(closestValue, arr[i])
        if(cv != closestValue) {
            closestIndex = i;
            closestValue = cv;
        }
    }

    return closestIndex;
}

var a1 = [21,  -9, 15, 2116, -71, 33];
var n1 = -71;
console.log(findIndexOfNum(a1, n1));

var a2 = [36, -12, 47, -58, 148, -55, -19, 10];
var n2 = -56;
console.log(findIndexOfNum(a2, n2));

var a3 = [5, 46, 17, -2, 89, 0, 26  ];
var n3 = 36;
console.log(findIndexOfNum(a3, n3));


/*
6. Given a
sentence as a string. Split it according to space and comma and create an
array consisting of the words of the array. The last word should not
contain the last . or ! .

Input
“May the Force be with you.”
“Keep your friends close, but your enemies closer.”
*/

const splitStr = function(str) {
    let arr = [];

    if(str.charAt(str.length - 1) == '.' || str.charAt(str.length - 1) == '!') {
        str = str.slice(0, -1) + ' ';
    }

    let inWord = true;
    let word = '';
    for(let c of str) {
        if(c == ' ' || c == ',') {
            inWord = false;
            if(word.length != 0) {
                arr.push(word);
            }
            word = '';
        }
        else if(c != ' ' && c != ',' && !inWord) {
            inWord = true;
        }

        if(inWord) {
            word = word + c;
        }
    }

    return arr;
}

//var s1 = "May the Force be with you."
var s1 = "May  ,,  the    Force be ,, ,, with you!!"
console.log(splitStr(s1));

var s2 = "Keep your friends close, but your enemies closer."
console.log(splitStr(s2));

/*


7. Given an array of a size smaller than 100. It consists of numbers from 0 to 99 
in any order. Create a new array where each element from that array is placed under 
the index of its value. Start from the smallest value and end with the biggest one. 
If there are missing values, put them in their places undefined.

Input

[4, 3, 0, 9,]
[26, 30, 19, 5]
*/


const sortInAscendingOrder = function(arr) {
    let result = [];
    for(let i = 0; i < 100; i++) {
        if(arr.includes(i)) {
            result[i] = i;
        }
        else
            result[i] = undefined;
    }
    return result;
}


var a1 = [4, 3, 0, 9,];
console.log(sortInAscendingOrder(a1));
var a2 = [26, 30, 19, 5];
console.log(sortInAscendingOrder(a2));

/*
8. Given an
array consisting of the arrays of numbers (like a two-dimensional
array). Find the sum of each row and print them as an array.

Input

[[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]
[[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]
[[1], [2], [3], [4]]
*/

const sumOfRowsArr = function(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        result.push(sum);
    }
    return result;
}

var a1 = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]
var a2 = [[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]];
var a3 = [[1], [2], [3], [4]]
console.log(sumOfRowsArr(a1));
console.log(sumOfRowsArr(a2));
console.log(sumOfRowsArr(a3));

/*


9. Print the
following pattern:

******
*      *
*      *
*      *
*      *
*      *
******
*/

const printPattern = function(r, c) {
    for(let i = 0; i < r; i++) {
        let row = '';
        for(let j = 0; j < c; j++) {
            if((i == 0 || i == r - 1) || (j == 0 || j == c - 1)) {
                row = row + '*';
            }
            else
                row = row + ' ';
        }
        console.log(row);
    }
}

printPattern(7, 6);

/*
10. Print the following
number pattern:

1
2  6
3  7  10
4  8  11 13
5  9  12 14 15
*/

const printNumberPattern = function(row) {
for(let i = 1; i <= row; i++) {
    let n = 0;
    let diff = row - 1;
    let str = '';
    for(let j = 1; j <= i; j++) {
        let s = i + n;
        str += s + ' ';
        n = n + diff;
        diff--;
    }
    console.log(str); 
}
}

printNumberPattern(5);

  

