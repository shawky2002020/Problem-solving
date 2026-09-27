/**
 * Problem: 3Sum
 * Platform: LeetCode #15
 * Link: https://leetcode.com/problems/3sum/
 * Difficulty: Medium
 * Category: Two Pointers / Sorting
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) auxiliary space (excluding result array)
 */

export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // If the first element is > 0, remaining three sum can't be 0
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates for left and right pointers
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
}

// Example Execution
console.log("3Sum triplets:", threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [ [-1, -1, 2], [-1, 0, 1] ]
console.log("3Sum triplets:", threeSum([0, 1, 1])); // []
console.log("3Sum triplets:", threeSum([0, 0, 0])); // [ [0, 0, 0] ]
