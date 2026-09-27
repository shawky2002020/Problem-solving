/**
 * Problem: Contains Duplicate
 * Platform: LeetCode #217
 * Link: https://leetcode.com/problems/contains-duplicate/
 * Difficulty: Easy
 * Category: Arrays & Hashing
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

// Example Execution
console.log("Contains duplicate:", containsDuplicate([1, 2, 3, 1])); // true
console.log("Contains duplicate:", containsDuplicate([1, 2, 3, 4])); // false
console.log("Contains duplicate:", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
