/*
 Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 Return the indices of the two numbers index1 and index2, each incremented by one, as an integer array [index1, index2] of length 2.
 The tests are generated such that there is exactly one solution. You may not use the same element twice.
 Your solution must use only constant extra space.
 */
function twoSum(numbers: number[], target: number): number[] {
  let size = numbers.length;

  for (let i = 0; i < size; i++) {
    let start = i;
    let pivot = size - 1;

    while (start < pivot) {
      let currentTarget = numbers[pivot] + numbers[start];

      if (currentTarget == target) {
        return [start + 1, pivot + 1];
      } else if (currentTarget > target) {
        pivot--;
      } else {
        start++;
      }
    }
  }
  return [-1, -1];
}

// console.log(twoSum([1, 2, 3, 4, 5, 6], 7)); // [1, 6]

// console.log(twoSum([1,2,3,4,5,6] , 2));

// function isPalindrome(s: string): boolean {
//     let sentence = s;
//     let cleanSentence = s.toLowerCase().replace( /[^a-z0-9]/g,  '' )
//     let start = 0 ;
//     let end = cleanSentence.length - 1
//     while(start<end){
//       if (cleanSentence[start]!= cleanSentence[end]) {
//         return false
//       }
//       start++
//       end--
//     }
//     return true;
// };

/* console.log(isPalindrome('assa'));


You are given an integer array height of length n.
 n vertical lines drawn such that the two endpoints of the ith line are:
 (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
 */

/* 
first: consider max height of 2 columns as length
second: width = i2 - i1
calc area
compare
*/
/* function maxArea(height: number[]): number {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let area = 0;
  while (leftIndex < rightIndex) {
    let heightContainer = Math.min(height[leftIndex], height[rightIndex]);
    let widthContainer = rightIndex - leftIndex;
    area = Math.max(area, widthContainer * heightContainer);
        if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return area;
} */
/* 
P3
three indexes of elements that make sum =0

i + j + k = 0

i + j = -k
*/


/* 
1-sort
2-left , right index


map : [number : count]
number * count ascendingly +
*/


function threeSum(nums:number[]) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
}