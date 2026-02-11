function maxEarn(tvsNumber: number, maxBuy: number, costArr: number[]) {
  let maxEarn = 0;
  let remainingTvs = maxBuy;
  costArr.sort((a,b)=>a-b)
  for (let i = 0; i < costArr.length; i++) {
    const tvCost = costArr[i];
    if (tvCost< 0 && remainingTvs > 0) {
      maxEarn += Math.abs(tvCost)
      remainingTvs -- ;

    }
    
  }
  return maxEarn
}


console.log(maxEarn(5,3,[-6,0,35,-2,4]));
