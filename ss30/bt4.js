function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
function printPrimeNumbers(arr) {
    console.log("Các số nguyên tố trong mảng là:");
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            console.log(arr[i]);
        }
    }
}
let numbers = [2, 3, 5, 7, 10, 11, 13, 17, 20];

printPrimeNumbers(numbers);