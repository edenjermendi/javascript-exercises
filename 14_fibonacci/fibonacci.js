const fibonacci = function(n) {
    n = Number(n);

    if(n === 0) {
        return 0;
    } else if (n < 1) {
    return "OOPS"
    }
    
    let fib =  [1, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib [i - 1] + fib[i - 2];
    }
    return fib[n - 1];
};


// Do not edit below this line
module.exports = fibonacci;
