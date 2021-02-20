//Ex2.3 - Find the Next Perfect Square

const findNextSquare = (PerfectSquare) => {
  let sqrtNum = Math.sqrt (PerfectSquare);
  let nexSquare;
  if (Number.isInteger (sqrtNum) === true) { // check if the number is int (not float,double).
    nexSquare = sqrtNum + 1;
    nexSquare = Math.pow (nexSquare, 2);
    return nexSquare;
  } else return -1;
};

const num = 121;
if (findNextSquare (num) === -1) {
  console.log (`${num} is not a perfect`);
} else
  console.log ('The next integral perfect square is:', findNextSquare (num));
