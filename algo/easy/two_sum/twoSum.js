/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Example 4:
Input: nums = [1,3,3], target = 13
Output: null

*/

// export default function twoSum(nums, target) {
//   let map = new Map();
//   for (let [i, num] of nums.entries()) {
//     let diff = target - num;
//     if (map.has(diff)) {
//       return [map.get(diff), i];
//     }

//     map.set(num, i);
//   }

//   return null;
// }

function twoSum(nums, target) {
  // for loop -> 3, 2, 4 -> 6
  // stor element in a map with its index -> {} -> 3:0, 2:1
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(num, i);
    }
  }

  return null;
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1] / [1,0]
// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1] / [1,0]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2] / [2 ,1]

// 3: 0
// 2: 1
// [_, _, 4], 6
//        i
