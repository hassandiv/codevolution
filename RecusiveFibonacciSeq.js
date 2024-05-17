const recursiveFibonacci = (n) => {
	if (n < 2) {
		return n;
	}
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log("recursiveFibonacci", recursiveFibonacci(0)); //0
console.log("recursiveFibonacci", recursiveFibonacci(1)); //1
console.log("recursiveFibonacci", recursiveFibonacci(2)); //1
console.log("recursiveFibonacci", recursiveFibonacci(3)); //2
console.log("recursiveFibonacci", recursiveFibonacci(4)); //3
console.log("recursiveFibonacci", recursiveFibonacci(6)); //8

// recursiveFibonacci(6) = 8
//        /                  \
// recursiveFibonacci(5) = 5    +   recursiveFibonacci(4) = 3
//      /                      \                                         \                      \
// recursiveFibonacci(4) = 3  + recursiveFibonacci(3) = 2  + recursiveFibonacci(3) = 2  + recursiveFibonacci(2) = 1
//    /                      \                   /                      \                   /                      \                   /                      \
// recursiveFibonacci(3) = 2  + recursiveFibonacci(2) = 1  + recursiveFibonacci(2) = 1  + recursiveFibonacci(1) = 1  + recursiveFibonacci(2) = 1  + recursiveFibonacci(1) = 1  + recursiveFibonacci(1) = 1  + recursiveFibonacci(0) = 0
//  /                      \                   /                      \                   /                      \                   /                      \                   /                      \                   /
// recursiveFibonacci(2) = 1  + recursiveFibonacci(1) = 1  + recursiveFibonacci(1) = 1  + recursiveFibonacci(0) = 0  + recursiveFibonacci(1) = 1  + recursiveFibonacci(0) = 0  + recursiveFibonacci(1) = 1  + recursiveFibonacci(0) = 0
//  /                      \
// recursiveFibonacci(1) = 1  + recursiveFibonacci(0) = 0

// O(n) iterative for exampel for loop. normal fib seq
// O(2^n) - Recursion - "O off (2 power n)" time complexity

// To find the nth number of the Fibonacci sequence, you can use the following formula:
// Fn = Fn-1 + Fn-2
// where F1 = 1 and F2 = 1 are the first two numbers in the sequence.
// For the 6th number in the Fibonacci sequence, we can use the formula to calculate it step by step:

// F1 = 1
// F2 = 1
// F3 = F2 + F1 = 1 + 1 = 2
// F4 = F3 + F2 = 2 + 1 = 3
// F5 = F4 + F3 = 3 + 2 = 5
// F6 = F5 + F4 = 5 + 3 = 8
