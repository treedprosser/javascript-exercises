const fibonacci = function(num) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    if (num < 0) {
        return 'OOPS';
    }
    for (let i = 2; i <= num + 1; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
