//Ex2.4 - Unique

const findUniq = (arr) => {
  let uniq = [];
  arr.forEach (item => {
    if (arr.indexOf (item) === arr.lastIndexOf (item)) uniq.push (item);
  });

  return uniq.join();
};

console.log ("The unique element in the array is:",findUniq ([0, 0, 0, 0.55, 0, 0]));
console.log ("The unique element in the array is:",findUniq ([1, 1, 1, 2, 1, 1]));

