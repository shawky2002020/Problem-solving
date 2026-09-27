/**
 * Problem: Deep Flatten Nested Array
 * Category: JavaScript Data Manipulation / Recursion
 *
 * Description:
 * Implements a recursive deep array flattening function without relying on `Array.prototype.flat()`,
 * correctly handling arbitrary levels of nested arrays.
 *
 * Time Complexity: O(N) where N is total number of primitive elements
 * Space Complexity: O(D) call stack depth where D is max nesting depth
 */

type NestedArray<T> = Array<T | NestedArray<T>>;

export function flattenArray<T>(arr: NestedArray<T>): T[] {
  const flattened: T[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      flattened.push(...flattenArray(item));
    } else {
      flattened.push(item);
    }
  }

  return flattened;
}

// Example Execution
const nested = [1, [2, [3, [4, 5]], 6], [7, 8], 9];
console.log("Flattened array:", flattenArray(nested));
// Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
