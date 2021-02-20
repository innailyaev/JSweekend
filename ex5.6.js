//Ex5.6 - Mask

const maskify=(str)=>{
    let char='#';
    let mask='';
    for(let i=0; i<str.length-4;i++){
        mask+=char;
    }
    return mask+str.substring(str.length-4);

}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));



