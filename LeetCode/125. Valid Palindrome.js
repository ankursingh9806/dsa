// approach: two pointers
// time complexity: O(n)
// space complexity: O(1)

var isPalindrome = function (s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9'))) {
            i++;
        } else if (!((s[j] >= 'a' && s[j] <= 'z') || (s[j] >= '0' && s[j] <= '9'))) {
            j--;
        } else {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
};
