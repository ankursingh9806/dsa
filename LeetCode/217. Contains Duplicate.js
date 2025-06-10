// approach: brute force
// time complexity: O(n^2)
// space complexity: O(1)

var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// approach: set
// time complexity: O(n)
// space complexity: O(n)

var containsDuplicate = function (nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
};
