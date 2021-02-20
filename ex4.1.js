//Advanced Math
//Ex4.1 - Fibonacci

const fibonacci = (n) => {
  let fiboArr = [];
  fiboArr[0] = 0;
  fiboArr[1] = 1;
  for (i = 2; i < n; i++) { 
    fiboArr[i] = fiboArr[i - 2] + fiboArr[i - 1];
  }

  return fiboArr;
}

console.log(fibonacci(10));
