/**
 * Problem: Subarray Sum Equals K
 * Platform: LeetCode #560
 * Link: https://leetcode.com/problems/subarray-sum-equals-k/
 * Difficulty: Medium
 * Category: Prefix Sum / Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export function subarraySum(nums: number[], k: number): number {
  let prefixSum = 0;
  let matchCount = 0;
  const frequencies = new Map<number, number>();

  // Base case: prefix sum of 0 occurs once before iterating
  frequencies.set(0, 1);

  for (const num of nums) {
    prefixSum += num;
    const targetPrefix = prefixSum - k;

    matchCount += frequencies.get(targetPrefix) ?? 0;
    frequencies.set(prefixSum, (frequencies.get(prefixSum) ?? 0) + 1);
  }

  return matchCount;
}

// Example Execution
console.log("Subarrays count:", subarraySum([1, 1, 1], 2)); // 2
console.log("Subarrays count:", subarraySum([1, 2, 3], 3)); // 2 ([1, 2] and [3])
console.log("Subarrays count:", subarraySum([1, -1, 0], 0)); // 3
