// Array Handling

// 1. Write a js program to read and print elements of array.

let arrPrint = [1, 2, 3, 4, 'ali'];
for (let key in arrPrint) {
    console.log(key, arrPrint[key]);
}
console.log(arrPrint)

// 2. Write a js program to print all negative elements in an array.

let arrNeg = [1, 2, -5, 6, -8, -3];
console.log(`Negative elements in array are:`);
for (let i = 0; i < arrNeg.length; i++) {
    if (arrNeg[i] < 0) {
        console.log(arrNeg[i]);
    }
}


// 3. Write a js program to find sum of all array elements. 

let arrSum = [2, 45, 63, 78, 93];

const arrSumAll = arrSum.reduce((acc, cur) =>
    acc + cur
);
console.log(`The sum of all values is: ${arrSumAll}`);

// 4. Write a js program to find maximum and minimum element in an array.

let arrMaxMin = [23, 65, 789, 45, 3, 64, 24, 678, 34, 54];

let maxMin = arrMaxMin.reduce((acc, curr) => {
    if (curr > acc.max) {
        acc.max = curr;
    }
    if (curr < acc.min) {
        acc.min = curr;
    }
    return acc;
},{
    max: -Infinity, min: Infinity
});
console.log(maxMin);

// console.log(Math.max(...arrMaxMin));
// console.log(Math.min(...arrMaxMin));


// 5. Write a js program to find second largest element in an array.

// 6. Write a js program to count total number of even and odd elements in an array.

// 7. Write a js program to count total number of negative elements in an array.

// 8. Write a js program to copy all elements from an array to another array.

// 9. Write a js program to insert an element in an array.

// 10. Write a js program to delete an element from an array at specified position.

// 11. Write a js program to count frequency of each element in an array.

// 12. Write a js program to print all unique elements in the array.

// 13. Write a js program to count total number of duplicate elements in an array.

// 14. Write a js program to delete all duplicate elements from an array.

// 15. Write a js program to merge two array to third array.

// 16. Write a js program to find reverse of an array.

// 17. Write a js program to put even and odd elements of array in two separate array.

// 18. Write a js program to search an element in an array.

// 19. Write a js program to sort array elements in ascending or descending order.

// 20. Write a js program to sort even and odd elements of array separately.

// 21. Write a js program to left rotate an array.

// 22. Write a js program to right rotate an array.