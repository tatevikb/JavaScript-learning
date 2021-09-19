/*
1. Write a recursive
function to determine whether all digits of the number are odd or not.

Input

4211133
7791
5
*/

const isOdd = function(x) {
    return (x & 1) != 0;
}

const isOddDig = function(x) {
    if(x >= 0 && x < 9) {
        return isOdd(x);
    }

    return isOdd(x % 10) && isOddDig(Math.floor(x / 10));
}

console.log(isOddDig(4211133));
console.log(isOddDig(7791));
console.log(isOddDig(5));


/*
2. Given an array of
numbers. Write a recursive function to find its minimal positive element. (if
such element does not exist, return -1)․

Input

[45, -9, 15, 5, -78]
[-5, -9, -111, -1000, -7]
*/

const findMinPositive = function(arr) {
    if(arr.length == 0) {
        return -1;
    }

    if(arr[0] <= 0) {
        return findMinPositive(arr.slice(1));
    }

    let mm = findMinPositive(arr.slice(1));
    if(mm == -1) {
        return arr[0] <= 0 ? -1 : arr[0]; 
    }
    return Math.min(arr[0], mm);
}

console.log(findMinPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(findMinPositive([45, -9, 15, 5, -78]));
console.log(findMinPositive([-5, -9, -111, -1000, -7]));

/*
3. Given an array of
numbers which is almost sorted in ascending order.  Find the index where sorting order is
violated.

Input
[2, 12, 15, 48, 64]
[-9, -4, -4, 3, 12, 4, 5]
*/

const findViolatedIndex = function(arr) {
    if(arr.length < 2) {
        return arr.length;
    }

    if(arr[0] > arr[1]) {
        return 1;
    }

    return 1 + findViolatedIndex(arr.slice(1));
}

console.log(findViolatedIndex([2, 12, 15, 48, 64]));
console.log(findViolatedIndex([-9, -4, -4, 3, 12, 4, 5]));


/*
4. Given an array. Write a recursive function that removes the first element and returns the given array.
(without using arr.shift())


Input
[6, 78, ‘n’, 0, 1]
[5]
*/

const removeFirstElement = function(arr) {
    if(arr.length == 0) {
        return;
    }

    console.log(arr.slice(1))
    removeFirstElement(arr.slice(1));
}

removeFirstElement([6, 78, 'n', 0, 1]);
removeFirstElement([5]);

/*
5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint
create a function that concats arrays).


Input
[1, [3, 4, [1, 2]], 10]
[14, [1, [[[3, []]], 1], 0]
*/

const flattenArray = function(arr) {
    if(arr.length == 0) {
        return []
    }

    let tail = flattenArray(arr.slice(1));
    if(Array.isArray(arr[0])) {
        return flattenArray(arr[0]).concat(tail);
    }  
    return [arr[0]].concat(tail);

}

console.log(flattenArray([1, [3, 4, [1, 2]], 10]));
console.log(flattenArray([14, [1, [[[3, []]], 1], 0]]));

/*
6. Given an
array and a number N.  Write a recursive function that rotates an array N
places to the left. (Hint: to add an element to the beginning use arr.unshift())

Input

[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] 3
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] -2

*/

const rotate = function(arr, n) {
    if(n == 0) {
        return arr;
    }

    if(n > 0) {
    let tail = arr.slice(1);
    tail.push(arr[0]);
    return rotate(tail, n - 1);
    }
    else {
        let tail = arr.slice(0, -1);
        tail.unshift(arr[arr.length - 1]);
        return rotate(tail, n + 1);
    }
}


console.log(rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));


/*
7. Given a number. Write a
function that calculates its sum of the digits and if that sum has more than 1
digit find the sum of digits of that number. Repeat that process if needed and
return the result.

Input
14
29
999999999999
*/

const sumOfDigits = function(n) {
    if(n >= 0 & n <= 9) {
        return n;
    }
    let rem = n % 10;
    let quot = Math.floor(n / 10);
    return sumOfDigits(rem + sumOfDigits(quot));
}

console.log(sumOfDigits(14));
console.log(sumOfDigits(29));
console.log(sumOfDigits(999999999999));