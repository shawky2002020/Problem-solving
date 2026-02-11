/* 
  pointsNum = num of points
  maxLen = max X coordinates
  linePointsArr = array of points
*/

function detectPointsOutOfLine(
  maxLen: number,
  linePointsArr: [number, number][],
) {
  let pointsArr = Array(maxLen + 1).fill(false);
  for (let [start, end] of linePointsArr) {
    for (let i = start; i <= end; i++) {
      pointsArr[i] = true;
    }
  }
  let outPoints: number[] = [];
  pointsArr.forEach((val, index) => {
    if (val === false && index) {
      // to skip 0
      outPoints.push(index); // save index
    }
  });
  return outPoints;
}
export let res = detectPointsOutOfLine(5, [
  [2, 2],
  [1, 2],
  [5, 5],
]);

console.log(res);

/* 
  Think trial:
  1-Create arr filled with false with maxlen
  2-for each line fill sub arr with true 
  3-filter array basd on false
  FINAL -> return result.length & Index of false values
*/
