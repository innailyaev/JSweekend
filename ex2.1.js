//Ex 2 = Simple Math
//Ex2.1 - Sum of lowest numbers

const sumLowest = (arr) => {
  arr = arr.sort ((a, b) => { return a - b;});

  console.log (arr);
  return arr[0] + arr[1];;
};

console.log("The sum of the two lowest positive numbers:",sumLowest([19, 5, 42, 2, 77]));
console.log("The sum of the two lowest positive numbers:",sumLowest([10, 343445353, 3453445, 3453545353453]));
