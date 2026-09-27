/**
 * Problem: They Are Everywhere (Pokemon flats)
 * Platform: Codeforces #701C
 * Link: https://codeforces.com/problemset/problem/701/C
 * Category: Sliding Window / Hash Map
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(k) where k is distinct Pokemon types
 */

export function solvePokemon(n: number, s: string): number {
  const totalUniqueTypes = new Set(s).size;
  let minLength = n;
  let left = 0;
  const countMap = new Map<string, number>();

  for (let right = 0; right < n; right++) {
    const char = s[right];
    countMap.set(char, (countMap.get(char) || 0) + 1);

    while (countMap.size === totalUniqueTypes) {
      minLength = Math.min(minLength, right - left + 1);

      const leftChar = s[left];
      const currentCount = countMap.get(leftChar)!;

      if (currentCount === 1) {
        countMap.delete(leftChar);
      } else {
        countMap.set(leftChar, currentCount - 1);
      }

      left++;
    }
  }

  return minLength;
}

// Example Execution
console.log("Min flats to visit:", solvePokemon(7, "bcAAcbc")); // 3
console.log("Min flats to visit:", solvePokemon(7, "aAbBbAa")); // 4
