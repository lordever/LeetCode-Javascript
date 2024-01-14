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
var containsDuplicate = function (nums) {
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

console.log(containsDuplicate([1, 2, 3, 1]))