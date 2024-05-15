const fibonacci = (n) => {
	let result = [0, 1];
	// console.log("fibonacci", result[i - 1] + result[i - 2]);
	for (i = 2; i < n; i++) {
		//DESCRIPTION
		//while i less than n
		//for loop is a condition and a loop, which based on index and input.
		//if index less than input i < n,
		//if index less than or equal to input i <= n,
		//if index is greater than input i > n,
		//if index is greater than or equal to n i >= n

		//i++ read below info
		//if i = 2 and n = 3, then we have one loop because i < n, 2 < 3. in this first loop i++ doesn't change/add 1 to the index, so it will remain as the i init value = 2
		//After executing the loop body,
		//i++ adds a 1 to i at the end of the loop not during the loop. i is incremented by 1 (i++), making i equal to 3.

		//first round n = 2 no loop - false
		//second round n = 3 yes loop - true

		//Solution 1
		// const lastIndex = result[result.length - 1];
		// console.log("lastIndex", lastIndex);
		// const beforeLastIndex = result[result.length - 2];
		// console.log("beforeLastIndex", beforeLastIndex);
		// const sum = lastIndex + beforeLastIndex;
		// console.log("sum", sum);
		// result = [...result, sum];

		//Solution 2
		// const sum = result[i - 1] + result[i - 2];
		// result = [...result, sum];

		//Solution 3
		result[i] = result[i - 1] + result[i - 2];
	}
	return result;
};
// console.log("fibonacci", fibonacci(2)); //no loop - false
console.log("fibonacci", fibonacci(3)); //yes loop - true
console.log("fibonacci", fibonacci(4)); //yes loop - true
console.log("fibonacci", fibonacci(7)); //yes loop - true
