/**
 * Problem: Binary Search
 * Platform: LeetCode #704
 * Link: https://leetcode.com/problems/binary-search/
 * Difficulty: Easy
 * Category: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example Execution
console.log("Index:", search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log("Index:", search([-1, 0, 3, 5, 9, 12], 2)); // -1
