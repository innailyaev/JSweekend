// Basic Iteration Logic
// Ex5.1 - trimming string

const removeFirstLastChar=(str)=>{
    str = str.substring(1,str.length-1); //This method extracts the characters in a string between "start" and "end", not including "end" itself.
    return str;


}

console.log(removeFirstLastChar("Hello inna"));