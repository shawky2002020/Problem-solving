/**
 * Problem: Sereja and Dima
 * Platform: Codeforces #381A
 * Link: https://codeforces.com/problemset/problem/381/A
 * Category: Two Pointers / Greedy
 * Time Complexity: O(n) where n is the number of cards
 * Space Complexity: O(1)
 */

export function calcCards(numCards: number, cardsArr: number[]): [number, number] {
  let start = 0;
  let end = numCards - 1;
  let serejaSum = 0;
  let dimaSum = 0;
  let turn = 0; // even: Sereja, odd: Dima

  while (start <= end) {
    let chosenCard: number;
    if (cardsArr[start] >= cardsArr[end]) {
      chosenCard = cardsArr[start];
      start++;
    } else {
      chosenCard = cardsArr[end];
      end--;
    }

    if (turn % 2 === 0) {
      serejaSum += chosenCard;
    } else {
      dimaSum += chosenCard;
    }

    turn++;
  }

  return [serejaSum, dimaSum];
}

// Example Execution
const [sereja, dima] = calcCards(7, [1, 2, 3, 4, 5, 6, 7]);
console.log(`Sereja: ${sereja}, Dima: ${dima}`); // Sereja: 16, Dima: 12
