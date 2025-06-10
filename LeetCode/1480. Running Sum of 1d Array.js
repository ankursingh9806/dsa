// approach: brute force
// time complexity: O(n)
// space complexity: O(n)

var runningSum = function (nums) {
    let runningSum = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        runningSum.push(sum);
    }
    return runningSum;
};

// approach: inplace
// time complexity: O(n)
// space complexity: O(1)

var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};
