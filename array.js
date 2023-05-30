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
}, {
    max: -Infinity, min: Infinity
});
console.log(maxMin);

// console.log(Math.max(...arrMaxMin));
// console.log(Math.min(...arrMaxMin));


// 5. Write a js program to find second largest element in an array.

// 6. Write a js program to count total number of even and odd elements in an array.

let EvenOdd = [1, 3, 2, 4, 5, 43, 56, 7, 890];

const evenOddCount = (arr) => {
    let even = 0;
    let odd = 0;
    arr.map((item) => {
        if (item % 2 == 0) {
            even++;
        }
        else {
            odd++;
        }
    })
    console.log(`Total even numbers are: ${even} and odd numbers are: ${odd}`);
}
evenOddCount(EvenOdd);

// 7. Write a js program to count total number of negative elements in an array.

let negNumbers = [1, -3, 2, -4, -5, 43, -56, 7, -890];

const negativeCount = (arr) => {
    let neg = 0;
    arr.map((item) => {
        if (item < 0) {
            neg++;
        }
    })
    console.log(`Total negative numbers in array are: ${neg}`);
}
negativeCount(negNumbers);

// 8. Write a js program to copy all elements from an array to another array.

let arrCopy = [1, 265, 3, 4234, 5, 6, 732, 865];
let copiedAray = arrCopy.slice();
console.log(copiedAray);

// 9. Write a js program to insert an element in an array.

let arrInsert = [1,2,3,4,5];
let numInserted = parseInt(prompt("Enter a number to insert in array."));
arrInsert.push(numInserted);
console.log(arrInsert);

// 10. Write a js program to delete an element from an array at specified position.

let arrDelete = [34,56,75,234,677];
let specifiedElement= 234;
const deleteFunc = () => {
let deleteElem = arrDelete.filter((item)=>
    item != specifiedElement)
        console.log(deleteElem);
}
deleteFunc();

// 11. Write a js program to count frequency of each element in an array.

// 12. Write a js program to print all unique elements in the array.

// 13. Write a js program to count total number of duplicate elements in an array.

// 14. Write a js program to delete all duplicate elements from an array.

let arrDuplicate = [1,2,2,3,5,5];
let duplicateRemove = arrDuplicate.filter((item, index , arr)=>{
   return arr.indexOf(item) === index;
})
console.log(duplicateRemove);

// // 15. Write a js program to merge two array to third array.

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,0];
let mergeArr = arr1.concat(arr2);
console.log(mergeArr);

// 16. Write a js program to find reverse of an array.

const arrReverse = [12, 13, 34, 45, 56, 67, 78, 89];
function arrayReverse(arr) {
    arr.reverse();
    console.log(arr);
}
arrayReverse(arrReverse);

// 17. Write a js program to put even and odd elements of array in two separate array.

let arrEvenOdd = [1,2,3,4,5,6,7,8];
let evenArr = [];
let oddArr = [];
function pushEvenOdd(arr) {
    arr.forEach((item) => {
        if(item % 2 == 0){
            evenArr.push(item);
        }
        else{
            oddArr.push(item);
        }
    });
    console.log("Even numbers: " , evenArr);
    console.log("Odd numbers: " , oddArr);
}
pushEvenOdd(arrEvenOdd);

// 18. Write a js program to search an element in an array.

let arrSearch = [1,2,3,4,5,6,7,8];
let searchedItem = 5;

arrSearch.forEach((item , index) => {
    if(item === searchedItem){
        console.log("The element is at index: ", index);
    }
})

// 19. Write a js program to sort array elements in ascending or descending order.

let arrSort = [2,45,12,0,47,32,8];

function sorting(arr) {
    let ascendingSort = arr.sort((a , b) => a-b );
    console.log("Ascending order: ",ascendingSort);
    let descendingSort = arr.sort((a, b) => b-a);
    console.log("Descending order: ",descendingSort);
}
sorting(arrSort);

// 20. Write a js program to sort even and odd elements of array separately.

let arrSortEvenOdd = [1,265,3,4,670,45,36,44];

let sortEven = [];
let sortOdd = [];
function evenOddSort(arr){
    arr.forEach((item) => {
        if(item % 2 == 0){
            sortEven.push(item);
            sortEven.sort((a,b)=> a-b);
        }
        else{
            sortOdd.push(item);
            sortOdd.sort((a,b)=> a-b);
        }
    })
    console.log('Sorted Even Array: ', sortEven);
    console.log('Sorted Odd Array: ', sortOdd);
}
evenOddSort(arrSortEvenOdd)

// 21. Write a js program to left rotate an array.

let arrRotateLeft = [1,2,3,4,5];
let n = 3;

function rotateLeft(arr , position){
    let len = arr.length;
    let rotated = position % len;
    let rotationLeft = [...arr.slice(rotated) , ...arr.slice(0, rotated)]
    return rotationLeft;
}
console.log(rotateLeft(arrRotateLeft , n));

// 22. Write a js program to right rotate an array.

let arrRotateRight = [1,2,3,4,5];
let n1 = 3;

function rotateRight(arr, position) {
    let len = arr.length;
    let rotated = position % len;
    let rotationRight = [...arr.slice(len - rotated), ...arr.slice(0, len - rotated)]
    return rotationRight;
}
console.log(rotateRight(arrRotateRight , n1));