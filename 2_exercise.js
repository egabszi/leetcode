console.log("2. exercise")
const addTwoNumbers = (l1, l2) => {
    let list1 = [];
    let list2 = [];
    let output = [];
    l1.map(item => list1.unshift(item))
    l2.map(item => list2.unshift(item))
    list1 = Number(list1.join(""))
    list2 = Number(list2.join(""))
    let sumSplitted = (list1 + list2).toString().split("")
    sumSplitted.map(item => output.unshift(Number(item)))
    console.log(output)
};

addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])
console.log("expected: [8,9,9,9,0,0,0,1]")