const isPalindrome = function(x) {
    const revx = Number([...x+''].reverse().join(""))
    x === revx ? console.log(true) : console.log(false)
};

isPalindrome(121)
console.log("expected: true")
isPalindrome(-121)
console.log("expected: false (121-)")
isPalindrome(10)
console.log("expected: false (01)")