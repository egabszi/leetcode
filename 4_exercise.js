var findMedianSortedArrays = function (nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => b - a);
    let indexOfMiddleOfArray = Math.floor(merged.length / 2);
    let median = 0;
    if (merged.length % 2 === 0) {
        median = (merged[indexOfMiddleOfArray] + merged[indexOfMiddleOfArray - 1]) / 2
        console.log(nums1, nums2, "median:", median);
        return median;
    } else {
        median = merged[indexOfMiddleOfArray];
        console.log(nums1, nums2, "median:", median);
        return median;
    }
};


console.log("1.example")
findMedianSortedArrays([1, 3], [2])
console.log("2.example")
findMedianSortedArrays([1, 2], [3, 4])
console.log("3.example")
findMedianSortedArrays([1, 2, 3], [-4, -5, -6])

/*
Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/
