//Ex6.4 - isogram

const isIsogram = str => {
  str=str.toLowerCase ();
  str = str.split ('');
  for (let i = 0; i < str.length; i++) {
      //The indexOf() method returns the first index at which a given element can be found
      //The lastIndexOf() method returns the index within of the  last occurrence of the specified value, searching backwards.
    if (str.indexOf (str[i]) !== str.lastIndexOf (str[i])) {
      return false; // repeats
    }
  }
  return true;
};

console.log (isIsogram ('Dermatoglyphics'));
console.log (isIsogram ('aba'));
console.log (isIsogram ('moOse'));
