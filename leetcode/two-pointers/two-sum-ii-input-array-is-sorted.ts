/**
 * Problem: Two Sum II - Input Array Is Sorted
 * Platform: LeetCode #167
 * Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Difficulty: Medium
 * Category: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

export function twoSum(numbers: number[], target: number): [number, number] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === target) {
      // 1-indexed output as required by LeetCode
      return [left + 1, right + 1];
    } else if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}

// Example Execution
console.log("Indices:", twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log("Indices:", twoSum([2, 3, 4], 6)); // [1, 3]
console.log("Indices:", twoSum([-1, 0], -1)); // [1, 2]
