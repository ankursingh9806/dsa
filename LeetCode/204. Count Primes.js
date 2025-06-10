// approach: brute force
// time complexity: O(n*sqrt(n))
// space complexity: O(1)

var countPrimes = function (n) {
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) { // time complexity would become O(n^2) if we use `i < num` instead of `i <= Math.sqrt(num)`
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
};

// approach: sieve of eratosthenes
// time complexity: O(n log * log n)
// space complexity: O(n)

var countPrimes = function (n) {
    let isPrime = new Array(n);
    for (let i = 0; i < n; i++) {
        isPrime[i] = true;
    }
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }
    return count;
};
