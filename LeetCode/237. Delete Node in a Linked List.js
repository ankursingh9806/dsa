// approach: node overwrite
// time complexity: O(1)
// space complexity: O(1)

var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
