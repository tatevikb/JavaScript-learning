/*
1. Given an array of
numbers. Write a function to separate odd and even numbers in different arrays. 

Input
[45, 12, 3, 6, 17, 0]
[1, 3, 5, 9]
*/

const isOdd = function(x) {
    return (x & 1) ? true : false;
}

const getOddAndEvenArrays = function(arr) {
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
    return [arrOdd, arrEven];
}

var a1 = [45, 12, 3, 6, 17, 0];
console.log(getOddAndEvenArrays(a1));
var a2 = [1, 3, 5, 9];
console.log(getOddAndEvenArrays(a2));

/*
2. Write a function that calculates the sum, difference, multiplication, 
and division between given array elements depending on the passed operation symbol. 
Write the appropriate function for each operation.
*/

const performOper = function(arr, op) {
    if (arr.length == 0) {
        return [];
    }

    let res = [];
    for(let i = 0; i < arr.length; i += 2) {
        if(i + 1 == arr.length) {
            res.push(arr[i]);
        }
        else {
            res.push(op(arr[i], arr[i+1]));
        }
    }
    return res;
}

const sum = function(arr) {
    return performOper(arr, (a, b) => a + b);
}

const diff= function(arr) {
    return performOper(arr, (a, b) => a - b);
}

const mult = function(arr) {
    return performOper(arr, (a, b) => a * b);
}

const div = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            console.log("There is an element with a value of 0․\nDivision by zero is undefined.")
            return [];
        }
    }

    return performOper(arr, (a, b) => a / b);
}


var a1 = [45, 12, 3, 6, 17];
//var a1 = [45, 12, 3, 6, 17, 0];
console.log(sum(a1));
console.log(diff(a1));
console.log(mult(a1));
console.log(div(a1));

/*
3. Given a phone number.
Write a function to clean it up, so it is valid.
The rules are as follows:

If the phone number is less than 10 digits assume that it is a bad number

If the phone number is longer than 10, then it is a bad number

If the phone number is 10 digits assume that it is good

If the phone number consists of 11 symbols and the first one is + and others
are numbers, then trim + and return the remaining 10 digits.

If the phone number contains the + symbol more than once, consider it a bad
number.

If the phone number contains + symbol, not as the first character, consider it
as a bad number.
Ignore spaces between digits.

Input

"455678"

"339 5656888"

"+0008989562"

"45231489562"

"123+2356897452"
*/

const cleanUp = function(str) {
    str = str.replace(/\s+/g, '');

    if(str.length < 10 || str.length > 10) {
        if(str.length == 11 && str.charAt(0) == '+') {
            console.log(str.substring(1, str.length));
        }
        console.log("Invalid number.");
    }
    else if(str.includes('+')) {
        console.log("Invalid number.");
    }
    else {
        console.log(str);
    }

}

cleanUp('455678');
cleanUp('339 5656888');
cleanUp('+0008989562');
cleanUp('45231489562');
cleanUp('123+2356897452');

/*
4. Given a word and a list of possible anagrams, select the correct sublist.

Input
"listen", ["enlists" "google" "inlets" "banana"]
"pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]
*/

const isAnagramOf = function(w, a) {
    if(w.length != a.length) {
        return false;
    }

    for(let i = 0; i < w.length; ++i) {
        if(a.indexOf(w[i]) == -1) {
            return false;
        }
    }

    return true;
}

const selectAnagrams = function(w, ans) {
    let res = [];
    for(let i = 0; i < ans.length; ++i) {
        if(isAnagramOf(w, ans[i])) {
            res.push(ans[i]);
        }
    }
    return res;
}

console.log(selectAnagrams("listen", ["enlists", "google", "inlets", "banana"]))
console.log(selectAnagrams("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]))

/*
5. Write a function, which
receives a string, finds possible largest numbers in the string, and returns
their sum.

Input
"FwrtY45KHL120mn10P"
"Wert12lop-12 "
*/

const isDigit = function(c) {
    return (c >= '0' && c <= '9');
}

const numbersSum = function(str) {

    let sum = 0;
    let tmp = '';

    str += ' ';
    for(let i = 0; i < str.length; i++) {
        let s = str[i];

        if(isDigit(s)) {
            tmp += s;
        }
        else if (tmp != '') {
            sum += parseInt(tmp);
            tmp = '';
        } 
    }

    return sum;
}

var s1 = 'FwrtY45KHL120mn10P';
var s2 = 'Wert12lop-12';
console.log(numbersSum(s1));
console.log(numbersSum(s2));



/*
6. Write a function which receives two strings and removes appearances of the second string from the
first one.

Input
"This is some text.", "is"
"Yes, London. You know: fish, chips, cup of tea, bad food, worse weather", "o"
*/

const removeSubStr = function(s1, s2) {
    let tmp = '';
    let result = '';

    let i = 0;
    while(i < s1.length) {
        if(s1[i] == s2[0]) {
            for(let j = 0; j < s2.length; j++) {
                tmp += s1[i + j];
            }
            if(tmp != s2) {
                tmp = '';
                i += s2.length;
            }
        }
        else {
            result += s1[i];
            i++;
        }
    }

    return result;
}

console.log(removeSubStr("This is some text.", "is"));
console.log(removeSubStr("Yes, London. You know: fish, chips, cup of tea, bad food, worse weather", "o"));

/*
7. Write a function to
compute a new string from the given one by moving the first char to come after
the next two chars, so "abc" yields "bca". Repeat this
process for each subsequent group of 3 chars. Ignore any group of fewer than 3
chars at the end.

Input
"dfgjkloyp"
"aweyoolp"
*/

const moveChars = function(str) {
    let res = '';
    let i = 0;
    let limit = str.length - str.length % 3;
    while(i < limit) {
        res += str[i + 1] + str[i + 2] + str[i];
        i += 3;
    }
    while(i < str.length) {
        res += str[i];
       i++;
    }
    return res;
}


console.log(moveChars("dfgjkloyp"));
console.log(moveChars("aweyoolp"));


/*
8. Write a function to
compute a new string from the given one by moving the first char to come after
the next two chars, so "abc" yields "bca". Repeat this
process for each subsequent group of 3
chars. Ignore any group of fewer than 3 chars at the end.

Input
"dfgjkloyp"
"aweyoolp"


*/
//This problem is same as 7.
/*


9. Write a function that
accepts a string(a sentence) as a parameter and finds the longest word within
the string․ If there are several words which are the longest ones print the
last word(words can be separated by space, comma, or hyphen).

Input
"A revolution without dancing is a revolution not worth having."
"Which would be worse - to live as a monster, or to die as a good
man?"
*/

const isSeparator = function(c) {
    return (c == ' ' || c == ',' || c == '-' || c == '.' || c == '?');
}

const findTheLongest = function(str) {
    let longest = '';

    let i = 0;
    while(i < str.length) {
        let j = i;
        let word = '';
        while(!isSeparator(str[j])) {
            word += str[j];
            j++;
        }
        if(longest.length <= word.length) {
            longest = word;
            word = '';
        }
        while(isSeparator(str[j])) {
            j++;
        }
        i = j;
    }

    return longest;
}

console.log(findTheLongest("A revolution without dancing is a revolution not worth having."));
console.log(findTheLongest("Which would be worse - to live as a monster, or to die as a good man?"));

/*
10.  Write a function that receives an array and a number as arguments and returns a
new array from the elements of the given array which are larger than the
given number.

Input
[10, 25, 16, -5, 30, 15, 24] , 16
[1, 1, 2, -3, 0, 8, 4, 0], 9
*/

const arrElemLarger = function(arr, n) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > n) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(arrElemLarger([10, 25, 16, -5, 30, 15, 24] , 16));
console.log(arrElemLarger([1, 1, 2, -3, 0, 8, 4, 0], 9));


/*
11. Write a function to find the longest substring in a given string without 
repeating characters except for space character. If there are several, return 
the last one. Consider that all letters are lowercase.

Input

"There are no two words in the English language more harmful than "good job"."
"parting your soup is not a miracle, bruce."
*/

const contains = function(s1, s2) {
    if(s2.length > s1.length) {
        return -1;
    }

    if(s2.length == s1.length && s2 == s1) {
        return 0;
    }

    let h = 0;
    while(h < s1.length - s2.length) {
        let k = 0;
        while(s2[k] == s1[h+k]) {
            k++;
        }
        if(k == s2.length) {
            return h;
        }
        h++;
    }

    return -1;
}

//console.log(contains("abcdefgh", "cde"))


const compare = function(a, b) {
    let sa = a.replace(/\s+/g, '');
    let sb = b.replace(/\s+/g, '');
    return sa.length <= sb.length;
}

const pickLongestSubstring = function(str) {
    let maxStr = ''; 
    let temp = '';
    for(let c of str) {
        if(c == ' ') {
            temp += c;
            continue;
        }

        if(temp.includes(c)) {
            temp = temp.substring(temp.lastIndexOf(c) + 1);
        }

        temp += c;

        if(compare(maxStr, temp)) {
            maxStr = temp;
        }
    }

    return maxStr;
}

console.log(pickLongestSubstring('There are no two words in the English language more harmful than "good job".'));
console.log(pickLongestSubstring("parting your soup is not a miracle, bruce."));

/*
12. Write a function, which
receives two numbers as arguments and finds all numbers between them such that
each digit of the number is even. The numbers obtained should be printed in a
comma-separated sequence on a single line.

Input
19, 42
99, 199
*/

const isEvenDigits = function(n) {
    let odds = 0;

    while(n > 0) {
        let rem = n % 10;
        if(rem % 2 == 0) {
            n = Math.floor(n / 10);
        }
        else {
            n = Math.floor(n / 10);
            odds++;
        }
    }
    return (odds == 0);
}

const getArrEvens = function(first, last) {
    let s = '';
    let i = first;
    while( i <= last) {
        if(isEvenDigits(i)) {
            s += i + ', ';
            i++;
        }
        else {
            i++;
        }
    }
    return s.slice(0, -2);
}

console.log(getArrEvens(19, 42));
console.log(getArrEvens(99, 199));

/*
13. Write a function, which
will receive a number between 0 to 999,999 
and spell out that number in English.

Input
5
25
425
9425
79425
179425
*/

const twoDigitNum = function(num) {

    if(num == 0) {
        return "zero";
    }

    const units = ["", "one", "two", "three", "four",
     "five", "six", "seven", "eight", "nine", "ten", "eleven", 
     "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
     "seventeen", "eighteen", "nineteen"];

    const dozens = ["", "", "twenty", "thirty", "forty",
    "fifty", "sixty", "seventy", "eighty", "ninety"]

    if( num < 20 ) {
        return units[num];
    }

    if( num < 100 ) {
        let m = num % 10;
        let t = Math.floor(num / 10);
        return dozens[t] + " " + units[m];
    }
}

const threeDigitNum = function(num) {
    if(num < 100) {
        return twoDigitNum(num);
    }

    let d2 = num % 100;
    let h = Math.floor(num / 100);

    return twoDigitNum(h) + " hunderd " + twoDigitNum(d2);
}


const numberToText = function(num) {

    if(num.length == 0 || num.length > 6) {
        console.log("Number is not between 0 to 999,999.");
        return;
    }

    if(num < 1000) {
        return threeDigitNum(num);
    }

    let rem = num % 1000;
    let quot = Math.floor(num / 1000);
    return threeDigitNum(quot) + " thausand " + threeDigitNum(rem);
}


console.log(numberToText(5));
console.log(numberToText(25));
console.log(numberToText(425));
console.log(numberToText(9425));
console.log(numberToText(79425));
console.log(numberToText(179425));

/*
14. Write a JavaScript
function to get all possible subsets of length 3 of the given array. Assume
that all elements in the array are unique.

Input
[4]
[19, 6]
[5, 9, 23, 0, -2, -1]
*/

const getSubsets = function(arr) {
    if(arr.length < 3) {
        return [];
    }

    let result = [];
    let n = arr.length;
    for(let i = 0; i < n - 2; ++i) {
        for(let j = i + 1; j < n - 1; ++j) {
            for(let k = j + 1; k < n; ++k) {
                result.push([arr[i], arr[j], arr[k]]);
            }
        }
    }
    return result;
}

console.log(getSubsets([4]));
console.log(getSubsets([19, 6]));
console.log(getSubsets([5, 9, 23, 0, -2, -1]));

/*
15. Write a function, which
receives an array as an argument which elements arrays of numbers. Find the product
of the biggest negative number of each array. If there is not any negative number,
ignore that array. Check that item of the given array are arrays.

Input
[[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]
[[3, 4], [11, 0], [5, 6, 7, 8]]
[1, 2, 3]
*/

const biggestNegativ = function(arr) {
    let min = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    if(min == 0) {
        return 1;
    }
    else
        return min;
}

const prodOfBiggestNegatives = function(arr) {
    let prod = 1;
    for(let i = 0; i < arr.length; i++) {
        prod *= biggestNegativ(arr[i]);
    }
    return prod;
}

var a1 = [[2, -9, -3, 0], [1, 2], [-4 , -11, 0]];
console.log(prodOfBiggestNegatives(a1));
var s2 = [[3, 4], [11, 0], [5, 6, 7, 8]];
console.log(prodOfBiggestNegatives(a2));
var a3 = [1, 2, 3];
console.log(prodOfBiggestNegatives(a3));