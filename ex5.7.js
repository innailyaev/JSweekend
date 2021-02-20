//Ex5.7 - shortest words

const shortestWords = (str) => {
    
  let shortest = str.trim().split (' ').reduce ((shortestWord, currentWord) => {
    return shortestWord.length < currentWord.length ? shortestWord : currentWord;
  });

  return shortest.length;
};
console.log(shortestWords ('hello my name is inna'));
 