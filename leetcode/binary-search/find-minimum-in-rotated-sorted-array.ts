/**
 * Problem: Find Minimum in Rotated Sorted Array
 * Platform: LeetCode #153
 * Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * Difficulty: Medium
 * Category: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

export function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // If mid element is strictly greater than right element,
    // the inflection point / minimum must lie strictly in the right half
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

// Example Execution
console.log("Min element:", findMin([3, 4, 5, 1, 2])); // 1
console.log("Min element:", findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log("Min element:", findMin([11, 13, 15, 17])); // 11
