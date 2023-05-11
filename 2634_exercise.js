const filter = function(arr, fn) {
    let filtered = arr.filter(item => item > fn);
    return console.log(filtered)
};


var filter2 = function(arr, fn) {
    let filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > fn) {
            filtered.push(arr[i])
        }
    }
    return console.log(filtered);
};

filter2([1,2,3,4,5,6], 3)
filter2([1,2,3,4,5,6], 5)
