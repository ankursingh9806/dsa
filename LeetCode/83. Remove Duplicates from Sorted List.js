// approach: iterative traversal
// time complexity: O(n)
// space complexity: O(1)

var deleteDuplicates = function (head) {
    let curr = head;
    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};
