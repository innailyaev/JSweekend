/* Implement Functionality
Implement the following methods -
- Filter
- ForEach
- Map
Using only for(), array and objects (without other js methods)*/


//Filter
/*The filter() method creates a new array with all elements that
 pass the test implemented by the provided function. */

const filterFunction=(arr)=>{
    let newArr=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i].length>5) //
            newArr.push(arr[i]); 
    }
    return newArr;
}

console.log("Filter:",filterFunction(['apple','orange','lemon','peach','banana','cherry']))
 
//forEach
/*The forEach() method executes a provided function once for each array element. */

const forEachFunction=(arr)=>{

    for (let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

}
console.log("forEach:");
forEachFunction([1,2,3,4,5]);


//map
/*The map() method creates a new array populated with the results
 of calling a provided function on every element in the calling array. */

 const mapFunction=(arr)=>{
    let mapArr=[];
    for(let i=0;i<arr.length;i++){
        mapArr[i]=arr[i]*2;
    }
    return mapArr;
 }

 console.log("map:",mapFunction([1,2,3,4,5]));
 
