/**
 * Problem: Sale
 * Platform: Codeforces #34B
 * Link: https://codeforces.com/problemset/problem/34/B
 * Category: Greedy / Sorting
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(1) auxiliary space (in-place sort)
 */

export function maxEarn(tvsNumber: number, maxBuy: number, costArr: number[]): number {
  let maxEarnings = 0;
  let remainingTvs = maxBuy;

  // Sort prices ascendingly to pick the cheapest/most negative costs first
  costArr.sort((a, b) => a - b);

  for (let i = 0; i < costArr.length; i++) {
    const tvCost = costArr[i];
    if (tvCost < 0 && remainingTvs > 0) {
      maxEarnings += Math.abs(tvCost);
      remainingTvs--;
    }
  }

  return maxEarnings;
}

// Example Execution
console.log("Max earnings:", maxEarn(5, 3, [-6, 0, 35, -2, 4])); // 8
