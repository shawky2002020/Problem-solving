/**
 * Problem: Best Time to Buy and Sell Stock
 * Platform: LeetCode #121
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Difficulty: Easy
 * Category: Sliding Window / Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

export function maxProfit(prices: number[]): number {
  let minBuyPrice = Infinity;
  let maxProfitVal = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minBuyPrice) {
      minBuyPrice = prices[i];
    } else {
      maxProfitVal = Math.max(maxProfitVal, prices[i] - minBuyPrice);
    }
  }

  return maxProfitVal;
}

// Example Execution
console.log("Max profit:", maxProfit([7, 1, 5, 3, 6, 4])); // 5 (buy at 1, sell at 6)
console.log("Max profit:", maxProfit([7, 6, 4, 3, 1])); // 0 (no profitable transaction)
