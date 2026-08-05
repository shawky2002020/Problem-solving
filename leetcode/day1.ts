// function containsDuplicate(nums: number[]): boolean {
//     let noDub = Array.from(new Set(nums));
//     if (noDub.length !== nums.length)
//       return true
//     return false

// };

// console.log(containsDuplicate([1,34]));

/*
a + b = target
b = target - a

*/

// function twoSum(nums: number[], target: number): number[] {
//   let numMap = new Map<number,number>()
//   for (let i = 0; i < nums.length; i++) {
//     let leftValue = target - nums[i];
//     if (numMap.has(leftValue)) {
//       return [i, numMap.get(leftValue)!];
//     }
//     else{
//       numMap.set(nums[i],i)
//     }

//   }
//   return [-1] //not found

// }
// console.log("sss");

// console.log(twoSum([1,2,3,4] , 10));

// Sol 1
//'asds' 'dssa'
// function isAnagram(s: string, t: string): boolean {
//   if (s.length != t.length) {
//     return false;
//   }
//   let sMap = new Map();
//   for (const letter of s) {
//     sMap.set(letter, (sMap.get(letter)  ?? 0) + 1);
//   }
//   for (const letter of t) {
//     if (sMap.has(letter) && sMap.get(letter) - 1 >= 0) {
//       // console.log(letter , " from here");

//       sMap.set(letter, sMap.get(letter) - 1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

//Sol 2
// function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let sArr = Array.from(s).sort();
//   let tArr = Array.from(t).sort();

//   if (sArr.join('') == tArr.join('')) {
//     return true;
//   } else return false;
// }

// console.log(isAnagram("nagaeam", "anagram"));

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs:string[]) {
    const groups = new Map();

    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const char of str) {
            const index = char.charCodeAt(0) - 97; // 'a' is 97
            count[index]++;
        }

        // Separators prevent ambiguous keys.
        const key = count.join("#");

        if (!groups.has(key)) {
            groups.set(key, []);
        }

        groups.get(key).push(str);
    }

    return Array.from(groups.values());
};
//##IMP