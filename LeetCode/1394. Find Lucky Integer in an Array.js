// approach: brute force
// time complexity: O(n^2)
// space complexity: O(1)

var findLucky = function (arr) {
    let res = -1;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }
        if (count === arr[i]) {
            res = Math.max(res, arr[i]);
        }
    }
    return res;
};

// approach: map
// time complexity: O(n)
// space complexity: O(n)

var findLucky = function (arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    let res = -1;
    for (let [key, val] of map) {
        if (key === val) {
            res = Math.max(res, key);
        }
    }
    return res;
};
