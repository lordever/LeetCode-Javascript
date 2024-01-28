/**
 * Given an input string s, reverse the order of the words.
 *
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 *
 * Return a string of the words in reverse order concatenated by a single space.
 *
 * Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 *
 *
 * Example 1:
 *
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 * Example 2:
 *
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 * Example 3:
 *
 * Input: s = "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

/**
 * @Pattern - Two pointers
 * @runtime - Beats 18.34% of users with JavaScript
 * @memory - Beats 10.63% of users with JavaScript
 */
var reverseWords = function (s) {
    let sArr = Array.from(s.trim());
    let right = 0;
    let left = 0;
    let words = [];

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === " " || i === sArr.length - 1) {
            right = i === sArr.length - 1 ? i + 1 : i;
            if (right !== left) {
                const word = sArr.slice(left, right)
                    .join("")
                    .trim();

                if (word.length > 0) {
                    words.unshift(word);
                }
            }
            left = i + 1;
        }
    }

    return words.join(" ");
}

console.log(reverseWords());