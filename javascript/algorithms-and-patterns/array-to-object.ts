/**
 * Problem: Transform Array of Objects to Key-Value Record
 * Category: JavaScript Data Manipulation
 *
 * Description:
 * Transforms an array of objects like `[{ id: "a", score: 2 }, { id: "b", score: 4 }]`
 * into a lookup dictionary `{ a: 2, b: 4 }` using both imperative loops and `reduce`.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export interface ScoreItem {
  id: string;
  score: number;
}

// Approach 1: Functional Array.prototype.reduce
export function arrayToObjectReduce(items: ScoreItem[]): Record<string, number> {
  return items.reduce((acc, curr) => {
    acc[curr.id] = curr.score;
    return acc;
  }, {} as Record<string, number>);
}

// Approach 2: Linear For Loop
export function arrayToObjectLoop(items: ScoreItem[]): Record<string, number> {
  const result: Record<string, number> = {};
  for (let i = 0; i < items.length; i++) {
    result[items[i].id] = items[i].score;
  }
  return result;
}

// Example Execution
const input: ScoreItem[] = [
  { id: "a", score: 2 },
  { id: "b", score: 4 },
  { id: "c", score: 10 },
];

console.log("Dictionary (reduce):", arrayToObjectReduce(input)); // { a: 2, b: 4, c: 10 }
console.log("Dictionary (loop):", arrayToObjectLoop(input)); // { a: 2, b: 4, c: 10 }
