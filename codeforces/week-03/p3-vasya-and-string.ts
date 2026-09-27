/**
 * Problem: Vasya and String
 * Platform: Codeforces #676C
 * Link: https://codeforces.com/problemset/problem/676/C
 * Category: Sliding Window / Two Pointers
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(1)
 */

function countMaxForChar(targetChar: string, maxChange: number, str: string): number {
  let left = 0;
  let mismatched = 0;
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    if (str[right] !== targetChar) {
      mismatched++;
    }

    while (mismatched > maxChange) {
      if (str[left] !== targetChar) {
        mismatched--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

export function vasyaAndString(strLen: number, maxChange: number, inputStr: string): number {
  return Math.max(
    countMaxForChar("a", maxChange, inputStr),
    countMaxForChar("b", maxChange, inputStr),
  );
}

// Example Execution
console.log("Max beauty:", vasyaAndString(8, 1, "aabaabaa")); // 5
console.log("Max beauty:", vasyaAndString(4, 2, "abba")); // 4
