// approach: brute force
// time complexity: O(n)
// space complexity: O(1)

var findMin = function (nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    return min;
};

// approach: binary search
// time complexity: O(log n)
// space complexity: O(1)

var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return nums[l];
};
