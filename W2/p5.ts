/* 
numStudents , numOfTeam , ratingArr
*/

function getDistinctRating(
  numStudents: number,
  numOfTeam: number,
  ratingArr: number[],
) {
  let distinctRatings = new Set(ratingArr);
  let teamArr: number[] = [];
  let resStr: "YES" | "NO" = "NO";

  if (distinctRatings.size >= numOfTeam) {
    resStr = "YES";
    for (let setRate of distinctRatings) {
      let studentIndex = ratingArr.findIndex((rate) => rate == setRate);
      teamArr.push(studentIndex + 1);
      if (teamArr.length === numOfTeam) {
        break;
      }
    }
  } else {
    return resStr;
  }
  return [resStr, teamArr];
}

let res = getDistinctRating(4, 2, [20, 10, 40, 30]);

console.log(res);
