/* 
  numCards
  cardsArr
*/

function calcCards(numCards: number, cardsArr: number[]) {
  let start = 0;
  let end = numCards - 1;
  let player1Sum = 0;
  let player2Sum = 0;
  let i = 0
  while (end >= start) {
    if (cardsArr[start] > cardsArr[end]) {
      player1Sum += i % 2 ? cardsArr[start] : 0;
      player2Sum += i % 2 ? 0 : cardsArr[start];
      start++;
    } else {
      player1Sum += i % 2 ? cardsArr[end] : 0;
      player2Sum += i % 2 ? 0 : cardsArr[end];
      end--;
    }
    i++
  }
  return [player2Sum , player1Sum];
}

let res = calcCards(7, [1,2,3,4,5,6,7]);
console.log(res);

// 4 1 2 10 3