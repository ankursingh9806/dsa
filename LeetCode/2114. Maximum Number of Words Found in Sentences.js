// approach: brute force
// time complexity: O(n * m)
// space complexity: O(1)

var mostWordsFound = function (sentences) {
    let maxWords = 0;
    for (let i = 0; i < sentences.length; i++) {
        let count = 1;
        for (let j = 0; j < sentences[i].length; j++) {
            if (sentences[i][j] === ' ') {
                count++;
            }
        }
        maxWords = Math.max(maxWords, count);
    }
    return maxWords;
};
