/**
 * Problem: JavaScript Polyfills & Utility Functions (map, filter, debounce)
 * Category: JavaScript Polyfills & Closures
 *
 * Description:
 * Implements foundational JavaScript utilities from scratch:
 * 1. Custom Array.prototype.map polyfill
 * 2. Custom Array.prototype.filter polyfill
 * 3. Function debounce utility
 *
 * Time Complexity: O(n) for map and filter
 * Space Complexity: O(n) for returned transformed arrays
 */

// 1. Custom Map Polyfill
export function customMap<T, R>(arr: T[], callback: (item: T, index: number, array: T[]) => R): R[] {
  const result: R[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// 2. Custom Filter Polyfill
export function customFilter<T>(arr: T[], predicate: (item: T, index: number, array: T[]) => boolean): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 3. Debounce Utility
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delayMs: number,
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>): void {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
    }, delayMs);
  };
}

// Example Execution
const numbers = [1, 2, 3, 4];
console.log("Doubled:", customMap(numbers, (x) => x * 2)); // [2, 4, 6, 8]
console.log("Evens:", customFilter(numbers, (x) => x % 2 === 0)); // [2, 4]

const debouncedLog = debounce((msg: string) => console.log("Debounced:", msg), 200);
debouncedLog("Quick call 1");
debouncedLog("Quick call 2 (only this runs)");
