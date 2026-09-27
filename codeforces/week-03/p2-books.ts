/**
 * Problem: Books
 * Platform: Codeforces #279B
 * Link: https://codeforces.com/problemset/problem/279/B
 * Category: Sliding Window / Two Pointers
 * Time Complexity: O(n) where n is the number of books
 * Space Complexity: O(1)
 */

export function readBooksCalc(numBooks: number, freeTime: number, booksTimeArr: number[]): number {
  let maxBooks = 0;
  let windowStart = 0;
  let currentWindowSum = 0;

  for (let windowEnd = 0; windowEnd < numBooks; windowEnd++) {
    currentWindowSum += booksTimeArr[windowEnd];

    while (currentWindowSum > freeTime) {
      currentWindowSum -= booksTimeArr[windowStart];
      windowStart++;
    }

    maxBooks = Math.max(maxBooks, windowEnd - windowStart + 1);
  }

  return maxBooks;
}

// Example Execution
console.log("Max books read:", readBooksCalc(4, 5, [10, 1, 2, 1])); // 3
console.log("Max books read:", readBooksCalc(3, 3, [2, 2, 3])); // 1
