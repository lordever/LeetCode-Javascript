/**
 * Applicable categories which helps resolve problems:
 * 1. Arrays
 * 2. String
 * 3. Linked List
 *
 * More effective for sorted array
 */

//Standard

const twoPointers = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const currentSum = nums[left] + nums[right];
        if (currentSum === target) {
            return [left, right];
        } else {
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return [];
}

console.log(twoPointers([2, 5, 7, 9, 12], 17)) //[1, 4]
console.log(twoPointers([1, 2, 3, 4, 6], 6)) //[1, 3]
console.log(twoPointers([2, 3, 4, 5, 9], 1)) //[]
console.log(twoPointers([1, 2, 4, 6, 7], 8)) //[0, 4]
console.log(twoPointers([], 8)) //[]

