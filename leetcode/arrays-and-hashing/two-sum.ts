/**
 * Problem: Two Sum
 * Platform: LeetCode #1
 * Link: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 * Category: Arrays & Hashing
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(nums[i], i);
  }

  return [-1, -1];
}

// Example Execution
console.log("Two Sum indices:", twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log("Two Sum indices:", twoSum([3, 2, 4], 6)); // [1, 2]
console.log("Two Sum indices:", twoSum([3, 3], 6)); // [0, 1]
