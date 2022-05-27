var isUgly = function (n) {
    if (n < 1) return false;
    if (n === 1) return true;

    let numbers = [2, 3, 5];

    for (var i = 0; i < numbers.length; i++) {
        while (n && n % numbers[i] === 0) {
            n = Math.floor(n / numbers[i]);
        }
    }

    return n === 1;
};

console.log(isUgly(14));