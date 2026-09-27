/**
 * Problem: Second Largest Distinct Value
 * Category: Algorithms / Arrays
 *
 * Description:
 * Finds the second-largest distinct number in an integer array in a single linear pass (O(n)),
 * correctly handling duplicate maximums and negative numbers.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

export function secondLargest(nums: number[]): number | null {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    if (val > first) {
      second = first;
      first = val;
    } else if (val < first && val > second) {
      second = val;
    }
  }

  return second === -Infinity ? null : second;
}

// Example Execution
console.log("Second largest:", secondLargest([10, 5, 10, 8, 8])); // 8
console.log("Second largest:", secondLargest([10, 2, 3, 4, 4])); // 4
console.log("Second largest:", secondLargest([5, 5, 5])); // null (no distinct second largest)
console.log("Second largest:", secondLargest([-10, -5, -20])); // -10
