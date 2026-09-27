/**
 * Problem: Petya and Strings
 * Platform: Codeforces #112A
 * Link: https://codeforces.com/problemset/problem/112/A
 * Category: Strings / Lexicographical Comparison
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(1)
 */

export function petyaAndStrings(word1: string, word2: string): -1 | 0 | 1 {
  const w1 = word1.toLowerCase();
  const w2 = word2.toLowerCase();

  for (let i = 0; i < w1.length; i++) {
    const code1 = w1.charCodeAt(i);
    const code2 = w2.charCodeAt(i);

    if (code1 < code2) {
      return -1;
    } else if (code1 > code2) {
      return 1;
    }
  }

  return 0;
}

// Example Execution
console.log("Comparison result:", petyaAndStrings("aaaa", "aaaA")); // 0
console.log("Comparison result:", petyaAndStrings("abs", "Abz")); // -1
console.log("Comparison result:", petyaAndStrings("abcdefg", "AbCdEfF")); // 1
