/**
 * Problem: Majority Element
 * Platform: LeetCode #169
 * Link: https://leetcode.com/problems/majority-element/
 * Difficulty: Easy
 * Category: Arrays & Hashing / Voting Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1) using Boyer-Moore Voting Algorithm, O(n) using Map
 */

// Approach 1: Boyer-Moore Voting Algorithm (Optimal O(1) space)
export function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// Approach 2: Hash Map Frequency Count (O(n) space)
export function majorityElementMap(nums: number[]): number {
  const threshold = Math.floor(nums.length / 2);
  const freqMap = new Map<number, number>();

  for (const num of nums) {
    const nextCount = (freqMap.get(num) ?? 0) + 1;
    if (nextCount > threshold) {
      return num;
    }
    freqMap.set(num, nextCount);
  }

  return -1;
}

// Example Execution
console.log("Majority element:", majorityElement([3, 2, 3])); // 3
console.log("Majority element:", majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
