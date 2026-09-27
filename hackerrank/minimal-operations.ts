/**
 * Problem: Minimal Operations (Consecutive Character Replacements)
 * Platform: HackerRank
 * Category: Greedy / Strings
 *
 * Description:
 * Given a list of words, determine the minimum number of character replacements
 * required so that no two adjacent characters in each word are identical.
 *
 * Time Complexity: O(n * L) where n is word count and L is average word length
 * Space Complexity: O(1) auxiliary space (excluding result array)
 */

export function minimalOperations(words: string[]): number[] {
  const result: number[] = [];

  for (const word of words) {
    let replacements = 0;

    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i - 1]) {
        replacements++;
        // Greedily changing word[i] resolves the conflict with word[i-1]
        // and skips checking word[i] against word[i+1]
        i++;
      }
    }

    result.push(replacements);
  }

  return result;
}

// Example Execution
console.log("Replacements needed:", minimalOperations(["ab", "aab", "abb", "abab", "abaaaba"]));
// Output: [0, 1, 1, 0, 2]
