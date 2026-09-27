/**
 * Problem: Min Stack
 * Platform: LeetCode #155
 * Link: https://leetcode.com/problems/min-stack/
 * Difficulty: Medium
 * Category: Stack
 * Time Complexity: O(1) for all operations (push, pop, top, getMin)
 * Space Complexity: O(n)
 */

export class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    const currentMin =
      this.minStack.length === 0
        ? val
        : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

// Example Execution
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("Min (should be -3):", minStack.getMin()); // -3
minStack.pop();
console.log("Top (should be 0):", minStack.top()); // 0
console.log("Min (should be -2):", minStack.getMin()); // -2
