// approach: brute force
// time complexity: O(n)
// space complexity: O(1)

var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
};

// approach: binary search
// time complexity: O(log n)
// space complexity: O(1)

var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) {
            return m;
        }
        // check if left half is sorted
        if (nums[l] <= nums[m]) {
            // check if target is within left half
            if (nums[l] <= target && nums[m] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
            // right half is sorted
        } else {
            // check if target is within right half
            if (nums[r] >= target && nums[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};
