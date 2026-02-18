function readBooksCalc(numBooks: number, time: number, booksTimeArr: number[]) {
  let booksRead = 0;
  let windowStart = -1;
  let windowEnd = 0;
  let windowSum = 0;
  // Sliding Window approach:
  while (windowEnd >= windowStart && windowEnd < numBooks) {
    windowSum += booksTimeArr[windowEnd];
    if (windowSum <= time) {
      //can read

      booksRead = Math.max(booksRead, windowEnd - windowStart);
      windowEnd++;
    } else {
      while (windowSum > time) {
        windowStart++;
        windowSum -= booksTimeArr[windowStart];

      }
      windowEnd++
    }
  }

  return booksRead;
}

let res2 = readBooksCalc(4,5, [10,1,2,1]);
console.log(res2);

//3 max
