// approach: set
// time complexity: O(n)
// space complexity: O(n)

var findDisappearedNumbers = function (nums) {
    let set = new Set(nums);
    let res = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            res.push(i);
        }
    }
    return res;
};

// approach: inplace marking
// time complexity: O(n)
// space complexity: O(1)

var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
};
