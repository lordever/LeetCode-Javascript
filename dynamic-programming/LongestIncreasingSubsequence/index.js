/**
 Given an integer array nums, return the length of the longest strictly increasing
 subsequence.

 Example 1:

 Input: nums = [10,9,2,5,3,7,101,18]
 Output: 4
 Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.


 Example 2:

 Input: nums = [0,1,0,3,2,3]
 Output: 4


 Example 3:

 Input: nums = [7,7,7,7,7,7,7]
 Output: 1

 @runtime - beats 144 ms Beats 31.95% of users with JavaScript
 @memory - 49.72 MB Beats 5.11% of users with JavaScript
 */

Array.prototype.max = function() {
    return Math.max.apply(null, this);
}
var lengthOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) { //3, 1
                dp[i] = Math.max(dp[i], dp[j] + 1); //2
            }
        }
    }

    return dp.max();
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))