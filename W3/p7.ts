/* 
Bfakar tkon maps / arrays 
-hnbda2 mn awl box f awl saf
-lw nfs level fi mkan fady f array el gnbha box ytne2l
-b3dn ashof saf el ba3do ..
again
*/

function gravity(num: number, inputArr: number[]) {
  let arr: number[][] = [];
  const maxCol = Math.max(...inputArr);
  for (let i = 0; i < num; i++) {
    let subArr = Array(inputArr[i]).fill(1); // 1 => filled with cube / 0 => empty
    arr.push(subArr);
  }
  let start = 0;
  let end = num;
  for (let a = 0; a < num; a++) {
    let lastArr = arr[end];
    let startArr = arr[start];
    for (let b = 0; b < lastArr.length; b++) {
      //check bounds
      if (b > startArr.length) {
        break;
      } else if (lastArr[b] < startArr[b]) {
        lastArr[b] = 1;
        startArr[b] = 0;
      }
    }
    end--
  }
}

//Pause solution1
// More simpler solution striked me 🤖 use window as before 🤣

function gravity2(num: number, inputArr: number[]){
  let start = 0 ;
  let curr = 0;
  for (let i = 0; i < num; i++) {
    if (inputArr[curr] > inputArr [curr + 1]) { //swap
      let temp = inputArr[curr+1]
      inputArr[curr+1] = inputArr[curr]
      inputArr[curr] = temp;
    }
    
    while(inputArr[curr] < inputArr[start]){

    }
    
  }
}

//PAUSE SOLUTION 2
// Shit Shit Shit Shit 
// I should just sort it 🙃

function gravity3(num: number, inputArr: number[]){
  return inputArr.sort((a,b)=>a-b); //🙃🙃🙃🙃🙃🙃
}

console.log(gravity3(4,[3,2,1,2]));
