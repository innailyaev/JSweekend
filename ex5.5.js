//Ex5.5 - Abbreviate two words

const initials = (str) => {
  const fullName = str.split (' ');//Split a string into an array of substrings.
  let ch='.';
  //shift removes the first element from an array and returns that removed element. This method changes the length of the array.
  //pop removes the last element from an array and returns that element.
  const initials = fullName.shift ().charAt (0) + ch + fullName.pop ().charAt (0); 
  return initials.toUpperCase ();
};

console.log(initials ('Sam Harris'));
console.log(initials ('Patrick Feeney'));
console.log(initials ('inna ilyaev'));
