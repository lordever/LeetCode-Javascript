/**
 * Applicable categories which helps resolve problems:
 * 1. Arrays
 * 2. String
 *
 */
const slidingWindow = (nums, k) => {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    maxSum = currentSum;

    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(slidingWindow([1, 2, 3, 5, 5, 5, 6, 2, 3], 3)); //16, because sum of these 3 indexes (4-6) will be equals 16
console.log(slidingWindow([1, 2, 3, 5, 5, 5, 6, 2, 3], 5)); //24, because sum of these 5 indexes (2-6) will be equals 24


const maxAverageArr = (nums, k) => {
    const result = [];
    let windowStart = 0;
    let currentSum = 0;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        currentSum += nums[windowEnd];

        if (windowEnd >= k - 1) {
            result.push(currentSum / k);
            currentSum -= nums[windowStart];
            windowStart++;
        }
    }

    return result;
}

console.log(maxAverageArr([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); //[2.2, 2.8, 2.4, 3.6, 2.8]