const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const leftArr = [];
    const rightArr = [];

    const pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

let unsortedArray = [234, 43, 55, 63, 5, 6, 235, 1];
console.time("Quick sort")
console.log(quickSort(unsortedArray));
console.timeEnd("Quick sort")