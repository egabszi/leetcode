const reverse = function (x) {
    const minNum = Math.pow(-2, 31);
    const maxNum = Math.pow(2, 31) - 1;
    const reversedX = [...x + ''].reverse()
    let output;
    if (x < 0) {
        reversedX.pop()
        output = Number(reversedX.join("")) * -1;
        if (output <= maxNum && output >= minNum) {
            console.log(output)
            return output;
        } else {
            output = 0;
            console.log(output)
            return output;
        }
    } else {
        output = Number(reversedX.join(""));
        if (output <= maxNum && output >= minNum) {
            console.log(output)
            return output;
        } else {
            output = 0;
            console.log(output)
            return output
        }
    }
}


reverse(123);
console.log("expected: 321")
reverse(-123)
console.log("expected: -321")
reverse(120);
console.log("expected: 21")
reverse(1534236469);
console.log("expected: 0")
reverse(-2147483648);
console.log("expected: 0")