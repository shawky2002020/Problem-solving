/**
 * Problem: Valid Palindrome
 * Platform: LeetCode #125
 * Link: https://leetcode.com/problems/valid-palindrome/
 * Difficulty: Easy
 * Category: Two Pointers / Strings
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary (or O(n) for sanitized string)
 */

export function isPalindrome(s: string): boolean {
  const cleanSentence = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let start = 0;
  let end = cleanSentence.length - 1;

  while (start < end) {
    if (cleanSentence[start] !== cleanSentence[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Example Execution
console.log("Is palindrome:", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("Is palindrome:", isPalindrome("race a car")); // false
console.log("Is palindrome:", isPalindrome(" ")); // true
