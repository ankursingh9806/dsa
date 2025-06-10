// approach: brute force
// time complexity: O(n^2)
// space complexity: O(1)

var sumOddLengthSubarrays = function (arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if ((j - i + 1) % 2 !== 0) {
                totalSum += sum;
            }
        }
    }
    return totalSum;
};
