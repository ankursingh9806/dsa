// approach: brute force
// time complexity: O(n)
// space complexity: O(1)

var findPeakElement = function (nums) {
    if (nums.length === 1 || nums[0] > nums[1]) {
        return 0;
    }
    if (nums[nums.length - 1] > nums[nums.length - 2]) {
        return nums.length - 1;
    }
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }
    return -1;
};

// approach: binary search
// time complexity: O(log n)
// space complexity: O(1)

var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] < nums[m + 1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};
