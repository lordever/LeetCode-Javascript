/**
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 *
 * Example 1:
 *
 * Input: a = 1, b = 2
 * Output: 3
 *
 *
 * Example 2:
 *
 * Input: a = 2, b = 3
 * Output: 5
 *
 * @runtime - Beats 88.51% of users with JavaScript
 * @memory - Beats 88.85% of users with JavaScript
 */
var getSum = function (a, b) {
    while (b !== 0) {
        let sum = a ^ b;
        let carry = (a & b) << 1;

        a = sum;
        b = carry;
    }

    return a;
};

function convertToBinary(num) {
    return (+num).toString(2);
}

function convertToDecimal(binary) {
    return parseInt(binary, 2);
}

getSum(2, 3)