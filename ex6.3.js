//Ex6.3 - organize strings

const longest=(str1,str2)=>{
    let longestStr='';
    str1=str1.split('');
    str2=str2.split('');

    str1.forEach(x=>{
        if(longestStr.includes(x)==false)
            longestStr+=x;
    })
    str2.forEach(x=>{
        if(longestStr.includes(x)==false)
            longestStr+=x;
    })
    return longestStr.split('').sort().join('');;
 
}

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(longest(a,b));