/**
 * Problem: Points in Segments
 * Platform: Codeforces #1015A
 * Link: https://codeforces.com/problemset/problem/1015/A
 * Category: Array / Segment Tracking
 * Time Complexity: O(n * m) where n is segments and m is coordinate length
 * Space Complexity: O(m) to track point coverage
 */

export function detectPointsOutOfLine(
  maxLen: number,
  linePointsArr: [number, number][],
): number[] {
  const pointsArr = Array(maxLen + 1).fill(false);

  for (const [start, end] of linePointsArr) {
    for (let i = start; i <= end; i++) {
      pointsArr[i] = true;
    }
  }

  const outPoints: number[] = [];
  for (let i = 1; i <= maxLen; i++) {
    if (!pointsArr[i]) {
      outPoints.push(i);
    }
  }

  return outPoints;
}

// Example Execution
const unvisited = detectPointsOutOfLine(5, [
  [2, 2],
  [1, 2],
  [5, 5],
]);
console.log("Unvisited points count:", unvisited.length);
console.log("Unvisited points:", unvisited); // [3, 4]
