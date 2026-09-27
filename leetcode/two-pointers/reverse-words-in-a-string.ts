/**
 * Problem: Reverse Words in a String
 * Platform: LeetCode #151
 * Link: https://leetcode.com/problems/reverse-words-in-a-string/
 * Difficulty: Medium
 * Category: Two Pointers / Strings
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export function reverseWords(s: string): string {
  // Trim and split by multiple spaces, reverse words, and join with a single space
  return s
    .trim()
    .split(/\s+/)
    .reverse()
    .join(" ");
}

// Two-pointer string parsing approach without regex split
export function reverseWordsTwoPointers(s: string): string {
  const words: string[] = [];
  let right = s.length - 1;

  while (right >= 0) {
    // Skip spaces
    while (right >= 0 && s[right] === " ") {
      right--;
    }
    if (right < 0) break;

    let left = right;
    while (left >= 0 && s[left] !== " ") {
      left--;
    }

    words.push(s.substring(left + 1, right + 1));
    right = left;
  }

  return words.join(" ");
}

// Example Execution
console.log("Reversed:", `"${reverseWords("the sky is blue")}"`); // "blue is sky the"
console.log("Reversed:", `"${reverseWords("  hello world  ")}"`); // "world hello"
console.log("Reversed:", `"${reverseWords("a good   example")}"`); // "example good a"
