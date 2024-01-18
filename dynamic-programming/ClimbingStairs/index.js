/**
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example 1:
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * Example 2:
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * @runtime - Beats 98.68% of users with JavaScript
 * @memory - 41.81 MB Beats 36.84% of users with JavaScript
 */
var climbStairs = function (n) {
    const ways = new Array(n).fill(1);

    if (n === 1) {
        return ways[0];
    }

    ways[1] = 2;

    for (let i = 2; i < n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    return ways[n - 1];
};