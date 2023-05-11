let findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let sameNumRemoved =[];
    sameNumRemoved[0]= [...new Set(nums1)].filter(x => !set2.has(x));
    sameNumRemoved[1]= [...new Set(nums2)].filter(x => !set1.has(x));
    console.log(sameNumRemoved)
};

findDifference([1,2,3,3], [2,4,6])