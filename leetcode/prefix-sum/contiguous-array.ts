/**
 * Problem: Contiguous Array
 * Platform: LeetCode #525
 * Link: https://leetcode.com/problems/contiguous-array/
 * Difficulty: Medium
 * Category: Prefix Sum / Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export function findMaxLength(nums: number[]): number {
  // Treat 0 as -1 and 1 as +1. Equal 0s and 1s means prefix balance returns to a previously seen value.
  const firstSeenIndex = new Map<number, number>();
  firstSeenIndex.set(0, -1);

  let prefixBalance = 0;
  let maxSubarrayLen = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixBalance += nums[i] === 0 ? -1 : 1;

    if (firstSeenIndex.has(prefixBalance)) {
      const prevIndex = firstSeenIndex.get(prefixBalance)!;
      maxSubarrayLen = Math.max(maxSubarrayLen, i - prevIndex);
    } else {
      firstSeenIndex.set(prefixBalance, i);
    }
  }

  return maxSubarrayLen;
}

// Example Execution
console.log("Max contiguous len:", findMaxLength([0, 1])); // 2
console.log("Max contiguous len:", findMaxLength([0, 1, 0])); // 2
console.log("Max contiguous len:", findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])); // 6
