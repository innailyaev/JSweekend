// Ex5.2 - String Repeat

//using repeat method
const repeat_str=(n,str)=>{
    str=str.repeat([n]);
    return str;
}

console.log("Using repeat method:",repeat_str(5,'hello'));

//not with repeat method
const repeat2=(n,str)=>{
    let strArr = [];
    while(strArr.length < n){
        strArr.push(str);
    }
    return strArr.join('');
}

console.log("Not with repeat method:",repeat2(5,'hello'));
