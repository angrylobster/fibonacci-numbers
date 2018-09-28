const fibonacci = x => {
  const numbers = [];
  numbers[0] = 0;
  numbers[1] = 1;

  for (let i = 2; i <= x; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
  }

  return numbers[x];
};

console.log(fibonacci(process.argv[2]));
