// Math In Story
//Ex3.1 - Growth Of population

const nb_year=(p0,precent,aug,p)=>{
    countYears=0;
    precent=precent/100;
    while(p0<p){
        p0=p0+(p0*precent)+aug;
        countYears++;
    }
return countYears;
}
let p=2000000;
console.log(`The years the city needs to reach the population ${p} is:`,nb_year(1500000, 2.5, 10000, p));