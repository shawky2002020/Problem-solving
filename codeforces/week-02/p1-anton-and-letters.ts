/**
 * Problem: Anton and Letters
 * Platform: Codeforces #443A
 * Link: https://codeforces.com/problemset/problem/443/A
 * Category: Strings / Set
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(k) where k is the number of distinct letters
 */

export function countDistinctLetters(input: string): number {
  const letters = input.match(/[a-z]/g);
  if (!letters) return 0;
  const distinctLetters = new Set(letters);
  return distinctLetters.size;
}

// Example Execution
console.log("Count:", countDistinctLetters("{a, b, c, c, c}")); // 3
console.log("Count:", countDistinctLetters("{}")); // 0
