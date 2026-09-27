/**
 * Problem: Gravity Flip
 * Platform: Codeforces #405A
 * Link: https://codeforces.com/problemset/problem/405/A
 * Category: Sorting / Physics Simulation
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) in-place sort
 */

export function gravityFlip(numColumns: number, heights: number[]): number[] {
  // Gravity shifting blocks to the right produces an ascendingly sorted array
  return heights.sort((a, b) => a - b);
}

// Example Execution
console.log("Flipped columns:", gravityFlip(4, [3, 2, 1, 2])); // [1, 2, 2, 3]
console.log("Flipped columns:", gravityFlip(3, [2, 3, 8])); // [2, 3, 8]
