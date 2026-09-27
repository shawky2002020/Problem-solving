/**
 * Problem: Longest Substring Without Repeating Characters
 * Platform: LeetCode #3
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Difficulty: Medium
 * Category: Sliding Window / Hash Set
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, m)) where m is charset size
 */

export function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let maxLen = 0;
  const charSet = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Example Execution
console.log("Max length:", lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log("Max length:", lengthOfLongestSubstring("bbbbb")); // 1 ("b")
console.log("Max length:", lengthOfLongestSubstring("pwwkew")); // 3 ("wke")
