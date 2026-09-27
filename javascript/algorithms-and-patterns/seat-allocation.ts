/**
 * Problem: Seat Allocation & Availability
 * Category: Practical Algorithms / Array Simulation
 *
 * Description:
 * Implements greedy seat allocation algorithms for incoming groups:
 * 1. Sequential linear seat assignment returning end seat boundaries.
 * 2. Row capacity matching finding rows that can accommodate the aggregate seat demand.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export function calcSeatsAvailable(totalSeats: number, groupSizes: number[]): number[] {
  let allocatedSeats = 0;
  const result: number[] = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const requested = groupSizes[i];
    if (totalSeats - allocatedSeats >= requested) {
      allocatedSeats += requested;
      result.push(allocatedSeats);
    } else {
      result.push(0); // 0 indicates insufficient remaining seats
    }
  }

  return result;
}

export function findEligibleRows(seatsInRows: number[], groupSizes: number[]): number[] {
  const totalSeatsNeeded = groupSizes.reduce((sum, size) => sum + size, 0);
  const eligibleRowIndices: number[] = [];

  for (let rowIndex = 0; rowIndex < seatsInRows.length; rowIndex++) {
    if (seatsInRows[rowIndex] >= totalSeatsNeeded) {
      eligibleRowIndices.push(rowIndex);
    }
  }

  return eligibleRowIndices;
}

// Example Execution
console.log("Sequential seat allocation:", calcSeatsAvailable(7, [2, 5, 4])); // [ 2, 7, 0 ]
console.log("Eligible rows for total 10 seats:", findEligibleRows([5, 12, 8, 15], [3, 4, 3])); // [ 1, 3 ]
