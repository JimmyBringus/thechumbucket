// 1
// Write a function that takes in an array of integers and returns the sum of all the numbers

function arraySum41(summy){
    let sum = 0;
    for (let i = 0; i < summy.length; i++) {
        sum += summy[i];
    }
    return sum;
}


console.log(arraySum41([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000, 10000, 100000]))

// 2
// Write a function that takes an array of strings and returns the same array in reverse ( without using the array reverse method )
// Hint: you can iterate through an array backwards using i-- in a loop

// 3
// Write a function that prints the following structure to the console
// Hint: look up.repeat() for strings

// #
// # #
// # # #
// # # # #
// # # # # #
// # # # # # #

// 4
// Write a function that takes in a string and returns true or false whether the string is a palendrome (spelled the same forwards and backwards).
// Hint: strings can become arrays with .split()

// 5
// Write a function that takes two arrays of 6 playing cards and determines which array is the winning (highest) hand.
// You can assume all "A"s "K"s "Q"s and "J"s count as 10
