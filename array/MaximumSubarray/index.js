/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 *
 * Example 1:
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 * Example 2:
 *
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 * Example 3:
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 *
 * @runtime - 75ms - beats 38.24%
 * @memory - 50.32mb - beats 34.07%
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    if (nums.length <= 1) {
        return max;
    }

    let localMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        localMax = Math.max(nums[i], localMax + nums[i]);

        if (max < localMax) {
            max = localMax;
        }
    }

    return max;
};