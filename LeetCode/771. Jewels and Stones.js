// approach: brute force
// time complexity: O(n*m)
// space complexity: O(1)

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
};

// approach: set
// time complexity: O(n+m)
// space complexity: O(m)

var numJewelsInStones = function (jewels, stones) {
    let set = new Set(jewels);
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            count++;
        }
    }
    return count;
};
