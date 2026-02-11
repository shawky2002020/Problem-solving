/*
 N --> houses number
 M --> Tasks number
 m --> number of tasks per one
 house to house takes 1 sec
 */

function calcTime(n: number, m: number, arr: number[]) {
  let counter = 0;
  let currentHome = 1;
  for (let i = 0; i < arr.length; i++) {
    const targetHome = arr[i];
    if (currentHome < targetHome) {
      counter += targetHome - currentHome;
      currentHome = targetHome;
    } else if (currentHome > targetHome) {
      counter += n - currentHome + targetHome;
      currentHome = targetHome;
    }
    
  }
  return counter 
}


let res = calcTime(4,3,[2,3,3])
console.log(res);


/*

ha3ml for loop

current = 0
target = arr[i]

if ( current< target):
  counter += target - current
  current = target

else if(current > target):
  counter+= (n - current) + (target)
  current = target


*/
