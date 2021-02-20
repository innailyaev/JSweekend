//Ex3.2 - People on the Bus
busArray = [[10, 0], [5, 5], [10, 3], [2, 1], [0,5]];

const PeopleOnTheBus = (arr) => {
  let countPeople = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      countPeople = countPeople + arr[i][j] - arr[i][j + 1];
    }
  }
  return countPeople;
};

const testValue = (val) => {
  return val === 0 ? true : false;
};

if((testValue(busArray[0][1])===false)) //check the second value in the first stop of the bus
  console.log("At the first stop the bus is empty, and there are no people who can get off the bus");

if((testValue(busArray[busArray.length-1][0])===false))
  console.log("At the last bus stop there are no people getting on the bus");
else
  console.log('Number of people left(sleep) on the bus at the last stop:',PeopleOnTheBus (busArray));
  
 

