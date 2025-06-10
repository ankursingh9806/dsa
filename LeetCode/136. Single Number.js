// approach: bit manipulation
// time complexity: O(n)
// space complexity: O(1)

var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};
