// approach: two pointers
// time complexity: O(n)
// space complexity: O(1)

var moveZeroes = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    return nums;
};
