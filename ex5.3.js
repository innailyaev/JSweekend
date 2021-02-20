//Ex5.3 - To Camel Case

const camelCase = (str) => {
  let camelStr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') {
      camelStr[i] = str[i + 1].toUpperCase ();
      i++;
    } else camelStr[i] = str[i];
  }
  camelStr = camelStr.join ('');
  return camelStr;
};

console.log (camelCase ('the-stealth-warrior'));
console.log (camelCase ('The_Stealth_Warrior'));
