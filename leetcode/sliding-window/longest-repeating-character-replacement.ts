/**
 * Problem: Longest Repeating Character Replacement
 * Platform: LeetCode #424
 * Link: https://leetcode.com/problems/longest-repeating-character-replacement/
 * Difficulty: Medium
 * Category: Sliding Window / Frequency Map
 * Time Complexity: O(n)
 * Space Complexity: O(26) = O(1)
 */

export function characterReplacement(s: string, k: number): number {
  let left = 0;
  let maxFreq = 0;
  let maxWindow = 0;
  const count = new Array(26).fill(0);

  for (let right = 0; right < s.length; right++) {
    const charIndex = s.charCodeAt(right) - 65; // 'A' is 65
    count[charIndex]++;
    maxFreq = Math.max(maxFreq, count[charIndex]);

    // Current window size is (right - left + 1).
    // If letters needing replacement > k, shrink window from left
    while (right - left + 1 - maxFreq > k) {
      count[s.charCodeAt(left) - 65]--;
      left++;
    }

    maxWindow = Math.max(maxWindow, right - left + 1);
  }

  return maxWindow;
}

// Example Execution
console.log("Max length:", characterReplacement("ABAB", 2)); // 4 (replace two 'A's or two 'B's)
console.log("Max length:", characterReplacement("AABABBA", 1)); // 4 ("AABA" or "ABBA")
