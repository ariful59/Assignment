// 3.Numbers:

// a. Write a JavaScript function that takes a positive integer as input and returns true 
// if it is a prime number, otherwise returns false.

// b. Implement the function to check if a given positive integer is a prime number.

function isPrime(number){
    //if we divide the number upto it's sqrt then we will get the result
    //No need to loop through the length of the number
    for(let i = 2; i < Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

if(isPrime(10^9+3)){
    console.log(`This number: 10^9+3 is a prime number`);
} else {
    console.log(`This number: 10^9+3 is not a prime number`);
}
console.log(isPrime(4));
console.log(isPrime(71));

