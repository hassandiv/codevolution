const isPrime = (n) => {
	if (n < 2) {
		return false;
	}
	for (i = 2; i < n; i++) {
		console.log("n % i", n % i, i);
		if (n % i === 0) {
			return false;
		}
	}
	return true;
};
console.log("isPrime", isPrime(1)); //false
console.log("isPrime", isPrime(5)); //true
console.log("isPrime", isPrime(4)); //false
console.log("isPrime", isPrime(23)); //true

//Big-O = O(n) linear time complexity

//Example a 5*1 = 5, 1*5 = 5 this is prime number
//Example a 4*1 = 4, 1*4 = 4, 2*2 = 4 this is not a prime number
//no other number than 1 should give out the same result as the number "n"
//example n = 15, answer is 1*15 = 15, 15*1 = 15, because 15 accepts multiply by 3, 15*3 = 15 this is not a prime number

//n % i this means the difference/remainder after the division to reach the given number "n"
// we are dividing a number "n" on "i", "i" is changing due to the loop, "n" doesn't change, so we have many probabilities
//example n = 30, then 30 % 2, 30 % 3, 30 % 4, 30 % 5, ...etc until it reach 30 % 29
//if any probabilities of the 30 muliplied by all of the "i" has "remainders %" and is equal to === 0 then it will not be a prime number
//example 4 * 7 = 28 close to 30, our remainder is 2

const isPrimeOptimised = (n) => {
	if (n < 2) {
		return false;
	}
	for (i = 2; i <= Math.sqrt(n); i++) {
		console.log("n % i", n % i, i);
		if (n % i === 0) {
			return false;
		}
	}
	return true;
};
console.log("isPrimeOptimised", isPrimeOptimised(1)); //false
console.log("isPrimeOptimised", isPrimeOptimised(5)); //true
console.log("isPrimeOptimised", isPrimeOptimised(4)); //false
console.log("isPrimeOptimised", isPrimeOptimised(23)); //true

//Big-O = O(sqrt(n)) time complexity
//if n = 100, it will check until n = 10
//if n = 10000, it will check until n = 100
