console.log("14.exercise")
var romanToInt = function (s) {
    const romanNums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let output = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanNums[s[i]];
        const nextValue = romanNums[s[i + 1]];
        if (nextValue && currentValue < nextValue) {
            output -= currentValue;
        } else {
            output += currentValue;
        }
    }
    console.log(output)
    return output;

};

romanToInt("MCMXCIV");