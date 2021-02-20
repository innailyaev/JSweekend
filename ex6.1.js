//Advanced Iteration Logic
//Ex6.1 - Mumbling

const accum=(str)=>{
str=str.toLowerCase();
let accumString='' ;
    for(let i=0;i<str.length;i++){
        accumString=accumString+str[i].toUpperCase()+str[i].repeat([i]);
        if(i!=str.length-1) //check for not to put '-' in the end
            accumString=accumString+'-';
    }
return accumString;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));