// approach: math
// time complexity: O(n)
// space complexity: O(n)

var addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = '';
    while (i >= 0 || j >= 0 || carry !== 0) {
        let sum = carry;
        if (i >= 0) {
            sum += a[i] - '0'; // convert a[i] to number by subtracting it from string '0'
            i--;
        }
        if (j >= 0) {
            sum += b[j] - '0'; // convert b[j] to number by subtracting it from string '0'
            j--;
        }
        res = (sum % 2) + res;
        carry = Math.floor(sum / 2);
    }
    return res;
};
