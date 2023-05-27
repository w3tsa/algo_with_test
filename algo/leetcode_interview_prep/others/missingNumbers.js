/* 
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.


Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, 
so all numbers are in the range [0,2]. 
2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, 
so all numbers are in the range [0,9].
 8 is the missing number in the range since it does not appear in nums.
*/

// function missingNumber(nums) {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;

//   const sum = nums.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
//   return expectedSum - sum;
// }

// function missingNumber(nums) {
//   let missing = nums.length;

//   for (let i = 0; i < nums.length; i++) {
//     missing ^= i ^ nums[i];
//   }

//   return missing;
// }

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
