// approach: brute force
// time complexity: O(n^2)
// space complexity: O(n)

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let arr = t.split('');
    for (let i = 0; i < s.length; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (s[i] === arr[j]) {
                arr[j] = null;
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
};

// approach: map
// time complexity: O(n)
// space complexity: O(n)

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], (map.get(t[i]) || 0) - 1);
        } else {
            return false;
        }
    }
    for (let [key, val] of map) {
        if (val !== 0) {
            return false;
        }
    }
    return true;
};
