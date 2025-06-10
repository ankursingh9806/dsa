// approach: slow and fast pointers
// time complexity: O(n)
// space complexity: O(1)

var isPalindrome = function (head) {
    // find middle of list using slow and fast pointers
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // reverse second half of list
    let prev = null;
    while (slow !== null) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    // compare first and reversed second half
    let l = head, r = prev;
    while (r !== null) {
        if (l.val !== r.val) return false;
        l = l.next;
        r = r.next;
    }
    return true;
};
