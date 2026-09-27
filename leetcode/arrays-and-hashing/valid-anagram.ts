/**
 * Problem: Valid Anagram
 * Platform: LeetCode #242
 * Link: https://leetcode.com/problems/valid-anagram/
 * Difficulty: Easy
 * Category: Arrays & Hashing
 * Time Complexity: O(n)
 * Space Complexity: O(1) assuming bounded lowercase alphabet (size 26)
 */

// Approach 1: Frequency Map / Hash Map (Optimal O(n) Time, O(1) Space)
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = new Map<string, number>();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const count = charCount.get(char);
    if (!count) {
      return false;
    }
    if (count === 1) {
      charCount.delete(char);
    } else {
      charCount.set(char, count - 1);
    }
  }

  return charCount.size === 0;
}

// Approach 2: Sorting (O(n log n) Time)
export function isAnagramSorting(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return Array.from(s).sort().join("") === Array.from(t).sort().join("");
}

// Example Execution
console.log("Is anagram:", isAnagram("anagram", "nagaram")); // true
console.log("Is anagram:", isAnagram("rat", "car")); // false
