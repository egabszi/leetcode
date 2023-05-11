var mergeTwoLists = function(list1, list2) {
    let mergedList = list1.concat(list2).sort()
    return mergedList;
};

mergeTwoLists([1,2,4], [1,3,4])