/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
 *
 * [4,5,6,7,0,1,2] if it was rotated 4 times.
 * [0,1,2,4,5,6,7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 *
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 *
 * You must write an algorithm that runs in O(log n) time.
 *
 * Example 1:
 *
 * Input: nums = [3,4,5,1,2]
 * Output: 1
 * Explanation: The original array was [1,2,3,4,5] rotated 3 times.
 *
 * Example 2:
 *
 * Input: nums = [4,5,6,7,0,1,2]
 * Output: 0
 * Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
 *
 * Example 3:
 *
 * Input: nums = [11,13,15,17]
 * Output: 11
 * Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
 *
 * @runtime - Beats 24.83% of users with JavaScript
 * @memory - 48.64 MB Beats 5.29% of users with JavaScript
 */
var findMin = function (nums) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
        const mid = Math.floor((leftIndex + rightIndex) / 2);
        const midElem = nums[mid];

        if (mid > 0 && midElem < nums[mid - 1]) {
            return midElem;
        }

        if (midElem > nums[rightIndex]) {
            leftIndex = mid + 1;
        } else {
            rightIndex = mid;
        }
    }

    if (leftIndex === rightIndex) {
        return nums[leftIndex];
    }
};

console.log(findMin([2, 3, 1]))