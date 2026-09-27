/**
 * Problem: Group Anagrams
 * Platform: LeetCode #49
 * Link: https://leetcode.com/problems/group-anagrams/
 * Difficulty: Medium
 * Category: Arrays & Hashing
 * Time Complexity: O(n * k) where n is number of strings, k is max string length
 * Space Complexity: O(n * k)
 */

export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    const count = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      const index = str.charCodeAt(i) - 97; // 'a' is 97
      count[index]++;
    }

    // Using delimiter to avoid key collision
    const key = count.join("#");

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(str);
  }

  return Array.from(groups.values());
}

// Example Execution
console.log(
  "Grouped anagrams:",
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
);
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
