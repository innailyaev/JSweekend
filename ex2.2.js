//Ex2.2 - One and Zero - Binary

// using parseInt
const binaryConvert=(arr)=>{
    let binaryString = arr.join("");
    return parseInt(binaryString, 2); // The parseInt function parses the string argument and returns an integer of the specified radix (base).

}

console.log("The integer that is equivalent to the binary array is:",binaryConvert([1, 0, 1, 1]));
console.log("The integer that is equivalent to the binary array is:",binaryConvert([1,1,1,1,0]));
console.log("The integer that is equivalent to the binary array is:",binaryConvert([1,0,0,0,1,1,0]));

//another way
const binaryConvert2=(arr)=>{
    let result=0;
    for(let i=0; i<arr.length ;i++){
        result+=arr[i]*(Math.pow(2,arr.length-1-i));
    }
    return result;
}

console.log("binaryConvert2:",binaryConvert2([1,0,1,1]));
console.log("binaryConvert2:",binaryConvert2([1,1,1,1,0]));
console.log("binaryConvert2:",binaryConvert2([1,0,0,0,1,1,0]));

