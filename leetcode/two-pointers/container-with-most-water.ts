/**
 * Problem: Container With Most Water
 * Platform: LeetCode #11
 * Link: https://leetcode.com/problems/container-with-most-water/
 * Difficulty: Medium
 * Category: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const width = right - left;
    maxWater = Math.max(maxWater, width * minHeight);

    // Greedily advance the pointer with smaller height
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Example Execution
console.log("Max water area:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log("Max water area:", maxArea([1, 1])); // 1
