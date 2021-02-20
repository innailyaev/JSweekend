//Ex6.2 - Counting Duplicates

const duplicates = (str) => {
  let arrString = str.toLowerCase ().split ('');
  let lettersObj = {};

  for (let i = 0; i < arrString.length; i++) {
    let letter = arrString[i];
    lettersObj[letter] = lettersObj[letter] ? lettersObj[letter] + 1 : 1; // count the letters
  }

  let arr = getKey (lettersObj); // arr that include only the dupliceted elements
  console.log (`# ${arr.length}`);
  arr.forEach (x => {
    console.log (`'${x}' occurs ${lettersObj[x]} times`);
  });

  return lettersObj;
};

//This function returns all the object keys ​​that appear more than once
function getKey (obj) {
  const arr = [];
  Object.keys (obj).forEach (item => {
    if (obj[item] > 1) arr.push (item);
  });
  return arr;
}

console.log (duplicates ('indivisibility'));
console.log (duplicates ('Indivisibilities'));
console.log (duplicates ('aA11'));
