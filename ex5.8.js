//Ex5.8 - shortest words version 2

const longestWords = (str) => {
  let strArr = str.trim ().split (' ');
  let longest = strArr.reduce ((longestWord, currentWord) => {
    return longestWord.length > currentWord.length ? longestWord : currentWord;
  });
  console.log ('Longest word length is:', longest.length);
  let words = strArr.filter (x => {
    return x.length === longest.length;
  });

  return words;
};

console.log (
  'All longest words in the string:',
  longestWords (' my name is inna ')
);
