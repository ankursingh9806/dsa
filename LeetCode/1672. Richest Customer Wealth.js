// approach: brute force
// time complexity: O(n*m)
// space complexity: O(1)

var maximumWealth = function (accounts) {
    let maxSum = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};
