// approach: brute force
// time complexity: O(n^2)
// space complexity: O(1)

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

// approach: two pointers - only for sorted array
// time complexity: O(n)
// space complexity: O(1)

var twoSum = function (nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        let sum = nums[i] + nums[j];
        if (sum === target) {
            return [i, j];
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
    return [];
};

// approach: map
// time complexity: O(n)
// space complexity: O(n)

var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};
