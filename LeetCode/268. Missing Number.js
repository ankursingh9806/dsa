// approach: math
// time complexity: O(n)
// space complexity: O(1)

var missingNumber = function (nums) {
    let n = nums.length;
    let sum = 0;
    let actualSum = (n * (n + 1)) / 2;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    return actualSum - sum;
};
