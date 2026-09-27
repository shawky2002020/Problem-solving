/**
 * Problem: Search in Rotated Sorted Array
 * Platform: LeetCode #33
 * Link: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Difficulty: Medium
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
    }

    // Determine which half is sorted
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// Example Execution
console.log("Found index:", search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log("Found index:", search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log("Found index:", search([1], 0)); // -1
console.log("Found index:", search([4, 5, 6, 1, 2, 3], 3)); // 5
