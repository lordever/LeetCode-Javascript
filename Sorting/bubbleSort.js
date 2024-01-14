const simpleBubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j !== i; j--) {
            if (i === j) {
                continue;
            }

            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

let unsortedArray = [234, 43, 55, 63, 5, 6, 235, 1];
console.time("Simple sort")
console.log(simpleBubbleSort(unsortedArray));
console.timeEnd("Simple sort")

const optimizedBubbleSort = (arr) => {
    let swapped = false;
    let arrLength = arr.length;

    do {
        swapped = false;

        for (let i = 0; i < arrLength - 1; i++) {
            const j = i + 1;
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                swapped = true;
            }
        }

        arrLength--;
    } while (swapped);

    return arr;
}

let unsortedArray2 = [234, 43, 55, 63, 5, 6, 235, 1];
console.time("Optimized sort")
console.log(optimizedBubbleSort(unsortedArray2));
console.timeEnd("Optimized sort")
