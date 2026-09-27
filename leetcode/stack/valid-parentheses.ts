/**
 * Problem: Valid Parentheses
 * Platform: LeetCode #20
 * Link: https://leetcode.com/problems/valid-parentheses/
 * Difficulty: Easy
 * Category: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketMap: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example Execution
console.log("Is valid:", isValid("()[]{}")); // true
console.log("Is valid:", isValid("(]")); // false
console.log("Is valid:", isValid("([)]")); // false
console.log("Is valid:", isValid("{[]}")); // true
