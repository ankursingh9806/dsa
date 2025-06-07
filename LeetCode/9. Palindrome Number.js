// approach: math
// time complexity: O(log n)
// space complexity: O(1)

var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    let n = x;
    let rev = 0;
    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }
    return rev === x;
};
