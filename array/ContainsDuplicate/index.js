/**
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 *
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */
var containsDuplicate1 = function (nums) {
    const sortedNums = bubbleSort(nums);
    console.log('Sorted', sortedNums);
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) {
            return true;
        }
    }

    return false;
};

// Time Limit Exceeded
const bubbleSort = (arr) => {
    let arrLength = arr.length;
    let swapped = false;

    do {
        swapped = false;

        for (let i = 0; i < arrLength - 1; i++) {
            const j = i + 1;

            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;

                swapped = true;
            }
        }

        arrLength--;
    } while (swapped);

    return arr;
}

console.log(containsDuplicate1([1, 2, 3, 1])) // Timeout and memory exceptions

/**
 @runtime - 98ms, Beats 32.16%
 @memory - 54.28MB, Beats 58.66%
 */
var containsDuplicate2 = (nums) => {
    const numsObj = {};

    for (let i = 0; i < nums.length; i++) {
        if (numsObj.hasOwnProperty(nums[i])) {
            return true;
        }

        numsObj[nums[i]] = i;
    }

    return false;
}

/**
 @runtime - 74ms, Beats 82.08%
 @memory - 52.67MB, Beats 81.28%
 */
var containsDuplicateStandard = (nums) => {
    const numsSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (numsSet.has(nums[i])) {
            return true;
        }

        numsSet.add(nums[i]);
    }

    return false;
}
