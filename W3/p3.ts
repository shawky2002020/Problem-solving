/* 
 n:str length
 k:max change characters
*/

// function vasyaAndString(strLen: number, maxChange: number, inputStr: string) {
//   let windowStart = -1;
//   let windowEnd = 1;
//   let maxSub = 0;
//   let allowedChanges = maxChange;
//   while (windowEnd >= windowStart && windowEnd < strLen) {
//     if (inputStr[windowEnd] === inputStr[windowEnd - 1]) {
//       maxSub = Math.max(maxSub, windowEnd - windowStart - 1);
//     } else if (allowedChanges > 0) { //change letter
//       allowedChanges--;
//     } else {
//       // max changes exceeded
//       windowStart++; // to handle initial windowstart = -1
//       while (inputStr[windowStart] != inputStr[windowEnd]) {
//         windowStart++;
//       }
//     }
//     windowEnd++;
//   }
//   return maxSub
// }
function vasyaAndString(strLen: number, maxChange: number, inputStr: string) {
  return Math.max(
    countMax("a", maxChange, inputStr),
    countMax("b", maxChange, inputStr),
  );
}

function countMax(targetChar: string, maxChange: number, str: string) {
  let left = -1;
  let right = 0;
  let count = 0;
  let maxSub = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== targetChar) {
      count++;
    }
    while (count > maxChange) {
      left++;
      if (str[left] !== targetChar) {
        count--;
      }
    }
    maxSub = Math.max(maxSub, right - left);
    right++;
  }
  return maxSub;
}

let res = vasyaAndString(8, 1, "aabaabaa");
console.log(res);

// aababaabbbaaaaa
