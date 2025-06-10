// approach: brute force
// time complexity: O(n)
// space complexity: O(1)

var searchRange = function (nums, target) {
    let res = [-1, -1];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            res[0] = i;
            break;
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === target) {
            res[1] = i;
            break;
        }
    }
    return res;
};

// approach: binary search
// time complexity: O(log n)
// space complexity: O(1)

var searchRange = function (nums, target) {
    let res = [-1, -1];
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) {
            res[0] = m;
            r = m - 1;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    l = 0;
    r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) {
            res[1] = m;
            l = m + 1;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return res;
};
