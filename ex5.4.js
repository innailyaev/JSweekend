//Ex5.4 - To Weird Case

const toWeirdCase=(str)=>{
    let strArr=str.split('').map((x,i) =>{
        return (i%2===0) ? x.toUpperCase() : x.toLowerCase();
      }).join('');;
    
      return strArr;

}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));