// approach: brute force
// time complexity: O(n)
// space complexity: O(1)

var check = function (nums) {
    let count = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
};
