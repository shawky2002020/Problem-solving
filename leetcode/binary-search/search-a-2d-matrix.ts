/**
 * Problem: Search a 2D Matrix
 * Platform: LeetCode #74
 * Link: https://leetcode.com/problems/search-a-2d-matrix/
 * Difficulty: Medium
 * Category: Binary Search / Matrix
 * Time Complexity: O(log(m * n))
 * Space Complexity: O(1)
 */

export function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;

  // Virtual 1D binary search over 2D matrix
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const value = matrix[row][col];

    if (value === target) {
      return true;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

// Example Execution
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
console.log("Found 3:", searchMatrix(matrix, 3)); // true
console.log("Found 13:", searchMatrix(matrix, 13)); // false
