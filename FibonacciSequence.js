const fibonacci = (input) => {
	let result = [0, 1];
	for (i = 2; i < input; i++) {
		const lastIndex = result[result.length - 1];
		console.log("lastIndex", lastIndex);
		const beforeLastIndex = result[result.length - 2];
		console.log("beforeLastIndex", beforeLastIndex);
		const sum = lastIndex + beforeLastIndex;
		console.log("sum", sum);
		result = [...result, sum];
	}
	return result;
};
console.log("fibonacci", fibonacci(2));
console.log("fibonacci", fibonacci(3));
console.log("fibonacci", fibonacci(7));
