const fibonacci = (x, returnList) => {
  const numbers = [];
  numbers[0] = 0;
  numbers[1] = 1;

  for (let i = 2; i <= x; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
  }
  if (returnList) return numbers;
  return numbers[x];
};

//console.log(fibonacci(process.argv[2], process.argv[3]));

function fib(n) {
  if (n === 1 || n === 2) return 1;

  return fib(n - 2) + fib(n - 1);
}

console.log(fib(process.argv[2]));
