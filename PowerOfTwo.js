const isPowerOfTwo = (n) => {
	if (n < 1) {
		return false;
	}

	while (n > 1) {
		if (n % 2 !== 0) {
			console.log("n", n % 2, n);
			return false;
		}
		console.log("n", n % 2, n);
		n = n / 2;
	}

	return true;
};
console.log("isPowerOfTwo", isPowerOfTwo(1)); //default true
console.log("isPowerOfTwo", isPowerOfTwo(2)); //true
console.log("isPowerOfTwo", isPowerOfTwo(28)); //false

//modulus % it checks if there is a remainder. If remainder return 1 automatically if no remainder return 0
//if number is odd then it will return false immediatley on the first loop, because n % 2 should return remainder for odd numbers + 0.5, then % automatically returns 1
//if number is powerOfTwo will be reduced by half while condition is true, n = n / 2 until n value is 1, then both condition don't apply n < 1 OR n > 1 and then return true
//if number is even example 12, 22, 26, 28 ..etc it will be reduced by half while condition is true, n = n / 2 until n value is 1.5
//power of two is 2,4,8,16,32,64,128,256,512 ...etc and it should END TO 1 only to return true
