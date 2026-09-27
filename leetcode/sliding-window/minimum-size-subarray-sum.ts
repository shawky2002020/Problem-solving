/**
 * Problem: Minimum Size Subarray Sum
 * Platform: LeetCode #209
 * Link: https://leetcode.com/problems/minimum-size-subarray-sum/
 * Difficulty: Medium
 * Category: Sliding Window
 * Time Complexity: O(n) - each element visited at most twice
 * Space Complexity: O(1)
 */

export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// Example Execution
console.log("Min length:", minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2 (subarray [4, 3])
console.log("Min length:", minSubArrayLen(4, [1, 4, 4])); // 1
console.log("Min length:", minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
