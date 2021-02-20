// Ex2.6 - Years and Centuries

const centuryFromYear=(year)=>{
    let century;
    if(year%100===0)
        century=year/100;
    else{
        century=Math.ceil((year/100)); //The ceil() method rounds a number UPWARDS to the nearest integer, and returns the result.
    }  
    return century;
}

let y=1705;
console.log(`Century of the year ${y} is:`,centuryFromYear(y));