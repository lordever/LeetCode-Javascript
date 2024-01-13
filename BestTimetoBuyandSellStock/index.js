/**
 * @param {number[]} prices
 * @return {number}
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * Example 2:
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * Input: prices = [2,4,1]
 * Output: 2
 */

// Solution one
// Time Limit Exceeded
var maxProfit1 = function (prices) {
    let maxProfit = 0; //5

    for (let i = prices.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            const compliment = prices[i] - prices[j];

            if (compliment > maxProfit) {
                maxProfit = compliment;
            }
        }
    }

    return maxProfit;
}

/**
 * @runtime - 62ms, Beats 93.95%
 * @memory - 51.65MB, Beats 46.44%
 */
var maxProfit2 = function (prices) {
    let minStockPrice = prices[0]; //1
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (minStockPrice > prices[i]) {
            minStockPrice = prices[i];
            continue;
        }

        let localStockCount = prices[i] - minStockPrice;
        if (localStockCount > maxProfit) {
            maxProfit = localStockCount;
        }
    }

    return maxProfit;
}


var maxProfitStandard = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};
