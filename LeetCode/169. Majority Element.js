// approach: brute force
// time complexity: O(n^2)
// space complexity: O(1)

var majorityElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count > (nums.length / 2)) {
            return nums[i];
        }
    }
};

// approach: boyer moore voting algorithm
// time complexity: O(n)
// space complexity: O(1)

var majorityElement = function (nums) {
    let count = 0;
    let curr = null;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            curr = nums[i];
        }
        if (nums[i] === curr) {
            count++;
        } else {
            count--;
        }
    }
    return curr;
};
