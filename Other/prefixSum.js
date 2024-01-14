/**
 * Принцип Префиксной Суммы (Prefix Sum) - это метод предварительной обработки массива, который позволяет быстро и эффективно находить сумму элементов в подмассиве. Префиксная сумма часто используется для оптимизации решения задач, где требуется многократно вычислять сумму элементов различных подмассивов.
 *
 * Концепция
 * Префиксная сумма для массива arr - это массив prefixSums, где каждый элемент prefixSums[i] представляет собой сумму всех элементов arr от начала массива до i-го элемента включительно.
 *
 * Пример
 * Предположим, у нас есть массив arr = [3, 1, 4, 1, 5]. Префиксная сумма этого массива будет:
 *
 * prefixSums[0] = arr[0] (только первый элемент)
 * prefixSums[1] = arr[0] + arr[1] (сумма первых двух элементов)
 * prefixSums[2] = arr[0] + arr[1] + arr[2] (сумма первых трех элементов)
 * и так далее...
 */

const createPrefixSumArray = (arr) => {
    const prefixSum = new Array(arr.length);
    prefixSum[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    return prefixSum;
}

const getSubarraySum = (arr, start, end) => {
    if (start === 0) {
        return prefixSums[end];
    }
    return prefixSums[end] - prefixSums[start - 1];
}

const arr = [3, 1, 4, 1, 5];
const prefixSums = createPrefixSumArray(arr); //[3, 4, 8, 9, 14]

console.log(getSubarraySum(prefixSums, 0, 3));