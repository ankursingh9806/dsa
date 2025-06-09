// approach: brute force
// time complexity: O(n*k)
// space complexity: O(1)

var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n;
    for (let i = 0; i < k; i++) {
        let last = nums[n - 1];
        for (let j = n - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = last;
    }
    return nums;
};

// approach: brute force
// time complexity: O(n)
// space complexity: O(n)

var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n;
    let arr = [];
    for (let i = n - k; i < n; i++) {
        arr.push(nums[i]);
    }
    for (let i = 0; i < n - k; i++) {
        arr.push(nums[i]);
    }
    for (let i = 0; i < n; i++) {
        nums[i] = arr[i];
    }
    return arr;
};

// approach: two pointers
// time complexity: O(n)
// space complexity: O(1)

var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n;
    // reverse whole array
    let i = 0;
    let j = n - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    // reverse first k elements
    i = 0;
    j = k - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    // reverse remaining (n-k elements)
    i = k;
    j = n - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    return nums;
};
