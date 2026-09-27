/**
 * Problem: Xenia and Ringroad
 * Platform: Codeforces #339B
 * Link: https://codeforces.com/problemset/problem/339/B
 * Category: Math / Simulation
 * Time Complexity: O(m) where m is the number of tasks
 * Space Complexity: O(1)
 */

export function calcRingroadTime(n: number, m: number, tasks: number[]): number {
  let totalTime = 0;
  let currentHome = 1;

  for (let i = 0; i < m; i++) {
    const targetHome = tasks[i];
    if (targetHome >= currentHome) {
      totalTime += targetHome - currentHome;
    } else {
      totalTime += n - currentHome + targetHome;
    }
    currentHome = targetHome;
  }

  return totalTime;
}

// Example Execution
console.log("Time needed:", calcRingroadTime(4, 3, [2, 3, 3])); // 2
console.log("Time needed:", calcRingroadTime(4, 4, [3, 2, 3, 1])); // 6
