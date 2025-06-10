// approach: slow and fast pointers
// time complexity: O(n)
// space complexity: O(1)

var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
