/**
 * Problem: Diverse Team
 * Platform: Codeforces #988A
 * Link: https://codeforces.com/problemset/problem/988/A
 * Category: Hash Set / Greedy
 * Time Complexity: O(n) where n is the number of students
 * Space Complexity: O(n) to store distinct student ratings
 */

export function getDiverseTeam(
  numStudents: number,
  teamSize: number,
  ratings: number[],
): { possible: boolean; teamIndices: number[] } {
  const seenRatings = new Set<number>();
  const teamIndices: number[] = [];

  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    if (!seenRatings.has(rating)) {
      seenRatings.add(rating);
      teamIndices.push(i + 1); // 1-based indexing for Codeforces output
      if (teamIndices.length === teamSize) {
        return { possible: true, teamIndices };
      }
    }
  }

  return { possible: false, teamIndices: [] };
}

// Example Execution
const result = getDiverseTeam(4, 2, [20, 10, 40, 30]);
console.log(result.possible ? "YES" : "NO");
console.log("Team indices:", result.teamIndices); // [1, 2]
