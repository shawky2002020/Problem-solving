function calcSeatsAvailable(seats : number, groups : number[]){
  let left = 0;
  const resultArr = []
  for (let i = 0; i < groups.length; i++) {
   if (seats - left >= groups[i]) {
     resultArr.push(left + groups[i]);
     left += groups[i];
   }
   else{
    resultArr.push(0);
   }
    
  }
  return resultArr
}

console.log(calcSeatsAvailable(7 , [2,5,4]));



function calcSeats(seatsRows:number[] , groups:number[]){
  let resArr = []
  for (let i = 0; i < groups.length; i++) {
    let seatsNeeded = groups.reduce((a,b)=>a+b , 0)
    for (let k = 0; k < seatsRows.length; k++) {
      if (seatsNeeded <= seatsRows[k]) {
        resArr.push(k)
      }
    }
    
  }
}
