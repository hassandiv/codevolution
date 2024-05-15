const factorialOfNumber = (n) => {
	let result = 1;
	//Big-O = O(1) constant time complexity
	for (i = 2; i <= n; i++) {
		//Big-O = O(n) linear time complexity
		result = result * i;
		//Big-O = O(n) linear time complexity
	}
	return result;
};
console.log("factorialOfNumber", factorialOfNumber(0)); //1
console.log("factorialOfNumber", factorialOfNumber(1)); //1
console.log("factorialOfNumber", factorialOfNumber(2)); //2
console.log("factorialOfNumber", factorialOfNumber(3)); //6
console.log("factorialOfNumber", factorialOfNumber(4)); //24
console.log("factorialOfNumber", factorialOfNumber(5)); //120
