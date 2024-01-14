/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Example 2:
 *
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 */
var productExceptSelf = function (nums) {
    const length = nums.length;

    const leftProducts = new Array(length).fill(1); //[1, 1, 2, 6]
    const rightProducts = new Array(length).fill(1); //[24, 12, 4, 1]
    const result = new Array(length);

    for (let i = 1; i < length; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    //nums = [1,2,3,4]
    for (let i = length - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProducts[i] * rightProducts[i]
    }

    return result;
};



const productExceptSelfWithPrefixPostfixConcept = (nums) => {
    const length = nums.length;
    const prefixProduct = new Array(length).fill(1); // [1,1,2,6]
    const postfixProduct = new Array(length).fill(1); // [24,12,4,1]
    const result = new Array(length);

    for (let i = 1; i < length; i++) {
        postfixProduct[i] = nums[i - 1] * postfixProduct[i - 1];
    }

    for (let i = length - 2; i >= 0; i--) {
        prefixProduct[i] = nums[i + 1] * prefixProduct[i + 1];
    }

    nums.forEach((_, index) => {
        result[index] = prefixProduct[index] * postfixProduct[index];
    });

    return result;
}

const input = [1, 2, 3, 4];
console.log(productExceptSelfWithPrefixPostfixConcept(input)); // output: [24, 12, 8, 6]