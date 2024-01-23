/**
 * Pattern: sliding window
 *
 * You are given an integer array nums consisting of n elements, and an integer k.
 *
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
 * Any answer with a calculation error less than 10-5 will be accepted.
 *
 * @runtime - Beats 18.54% of users with JavaScript
 * @memory - Beats 5.08% of users with JavaScript
 */
var findMaxAverage = function (nums, k) {
    if (nums.length === 0) {
        return null;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    let windowStart = 0;
    let currentSum = 0;
    let maxAverage = -Infinity;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        currentSum += nums[windowEnd];

        if (windowEnd >= k - 1) {
            maxAverage = Math.max(maxAverage, currentSum / k);
            currentSum -= nums[windowStart];
            windowStart++;
        }
    }

    return maxAverage;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
console.log(findMaxAverage([5], 1)); // 5.00000