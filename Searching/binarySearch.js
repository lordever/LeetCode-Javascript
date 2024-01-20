//Array should be always sorted
const binarySearch = (nums, elem) => {
    if (nums[0] === elem) {
        return nums[0];
    }

    let left = 0;//0
    let right = nums.length - 1;
    let count = 0;


    while (left < right) {
        count++;
        const mid = Math.ceil((left + right) / 2);

        if (nums[mid] === elem) {
            console.log('Count', count);
            return nums[mid];
        }

        if (nums[mid] > elem) {
            right = mid;
        }

        if (nums[mid] < elem) {
            left = mid;
        }
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));