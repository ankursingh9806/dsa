// approach: brute force
// time complexity: O(n)
// space complexity: O(1)

var lengthOfLastWord = function (s) {
    let count = 0;
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    while (i >= 0 && s[i] !== ' ') {
        count++;
        i--;
    }
    return count;
};
