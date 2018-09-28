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

console.log(fibonacci(process.argv[2], process.argv[3]));
