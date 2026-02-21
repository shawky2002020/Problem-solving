function solvePokemon(n: number, s: string): number {
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

const n = 7;
const s = "aAbBbAa";
console.log(solvePokemon(n, s));
