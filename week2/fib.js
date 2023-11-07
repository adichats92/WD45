function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));

function fib2(n, fibArr = []) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    fibArr = fib2(n - 1, fibArr);
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    return fibArr;
  }
}

console.log(fib2(10));
