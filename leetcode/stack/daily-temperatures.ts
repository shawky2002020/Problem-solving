/**
 * Problem: Daily Temperatures
 * Platform: LeetCode #739
 * Link: https://leetcode.com/problems/daily-temperatures/
 * Difficulty: Medium
 * Category: Monotonic Stack
 * Time Complexity: O(n) - each element pushed and popped at most once
 * Space Complexity: O(n)
 */

export function dailyTemperatures(temperatures: number[]): number[] {
  const result = new Array(temperatures.length).fill(0);
  const stack: number[] = []; // Monotonic decreasing stack storing indices

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return result;
}

// Example Execution
console.log(
  "Days until warmer:",
  dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
);
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
console.log("Days until warmer:", dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log("Days until warmer:", dailyTemperatures([30, 60, 90])); // [1, 1, 0]
