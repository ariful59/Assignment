// 2.Math Object:

// a. Write a JavaScript function that takes an array of numbers as input and returns 
// the square root of the sum of squares of all the numbers. Use the Math object to perform 
// the necessary calculations.

// b. Implement the function to display the square root of the sum of squares for an array of numbers.

function calculateSquareRootOfSquaredSum(arrayOfNumbers) {
    let sumOfSquares = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sumOfSquares += arrayOfNumbers[i] * arrayOfNumbers[i];
        console.log(sumOfSquares);
    }
    return Math.sqrt(sumOfSquares);
}
console.log(calculateSquareRootOfSquaredSum([1, 2, 3, 4, 5, 6]));

