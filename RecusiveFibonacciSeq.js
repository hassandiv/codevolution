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
