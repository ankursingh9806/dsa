// approach: brute force
// time complexity: O(n)
// space complexity: O(1)

var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }
    return maxCount;
};
