// approach: brute force
// time complexity: O(n^2)
// space complexity: O(1)

var maxSubArray = function (nums) {
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};

// approach: kadane algorithm
// time complexity: O(n)
// space complexity: O(1)

var maxSubArray = function (nums) {
    let currSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
};
