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

//Array
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let uniqueIndex = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueIndex] = nums[i];
            uniqueIndex++;
        }
    }

    return uniqueIndex;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); //4


//String
var reverseWordsStandard = function (s) {
    const words = s.trim().split(/\s+/);

    let left = 0;
    let right = words.length - 1;
    while (left < right) {
        const temp = words[left];
        words[left] = words[right];
        words[right] = temp;
        left++;
        right--;
    }

    return words.join(" ");
}

console.log(reverseWordsStandard("the sky is blue")); // "blue is sky the"