var compose = function(functions) {
    return x => functions.reduceRight((acc,f)=>f(acc),x)
};

compose(functions = [x => x + 1, x => x * x, x => 2 * x], x = 4)