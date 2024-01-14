/**
 * Topics: Hash  Table, Array
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

/**
 * @runtime - 148ms, beats 12.33%
 * @memory - 42.07mb, beats 83.82%
 */
var twoSum1 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let k = 0; k < nums.length; k++) {
            if (i === k) {
                continue;
            }
            if (nums[i] + nums[k] === target) {
                return [i, k]
            }
        }
    }
};

var twoSum2 = function (nums, target) {
    const solvedMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        for (let k = 0; k < nums.length; k++) {
            if (i === k || solvedMap.has(nums[i] + nums[k])) {
                continue;
            }

            if (nums[i] + nums[k] === target) {
                return [i, k]
            }

            solvedMap.set(nums[i] + nums[k], nums[i] + nums[k]);
        }
    }
}


// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Math formula to find target: complement = target - k, where k - nums[i]
var twoSumStandard = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};