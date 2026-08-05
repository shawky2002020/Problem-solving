/* You are given an m x n integer matrix matrix with the following two properties:
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;
  let colLen = matrix[0].length;
  while (left <= right) {
    // search for right rows first
    let targetRow = Math.floor((left + right) / 2);
    let rowStart = matrix[targetRow][0];
    let rowEnd = matrix[targetRow][colLen - 1];

    if (rowStart <= target && rowEnd >= target) {
      let colArr = matrix[targetRow];
      let left = 0;
      let right = colLen - 1;
      while (left <= right) {
        let targetCol = Math.floor((left + right) / 2);
        if (colArr[targetCol] == target) {
          return true;
        } else if (colArr[targetCol] > target) {
          right = targetCol - 1;
        } else {
          left = targetCol + 1;
        }
      }
      return false;

      //Finded
    } else if (rowStart > target) {
      right = targetRow - 1;
    } else {
      left = targetRow + 1;
    }
  }
  return false;
}

let arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1; //array never empty
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// [1,2,3,4,5,6,7,8,9,10,11,12]

[6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
/* 
  [3,4,5,1,2]
*/
function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (nums[left] > nums[right]) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // min must be right side

      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    }
  }
  return nums[left];
}

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (right - left >= 0) {
    
    mid = Math.floor((left + right) / 2);
    console.log(`target is ${target}, and mid = ${nums[mid]}`);
    if (nums[mid] == target) {
      return mid;
    }
    if (target < nums[mid] && nums[left] <= nums[right]) {
      right = mid - 1;
    } else if (target > nums[mid] && nums[left] <= nums[right]) {
      left = mid + 1;
    }
  }
  return -1
}


console.log(search([4,5,6,1,2,3] , 3));
