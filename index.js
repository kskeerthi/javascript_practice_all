//sorting algo

//bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        for(let j  = 1; j<n - i; j++) {
            if(arr[j-1] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
           
        }
    }
    return arr;
}

let arr = [9, 1, 6, 5, 3, 0, 2];
console.log(bubbleSort(arr));

// Optimized Bubble Sort
function optimizedBubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {  // Outer loop runs n-1 times
        let swapped = false;  // Flag to track if any swaps were made
        for (let j = 1; j < n - i; j++) {  // Inner loop compares adjacent elements
            if (arr[j - 1] > arr[j]) {  // If out of order, swap
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                swapped = true;  // Mark that a swap has been made
            }
        }
        // If no swaps were made in this pass, array is already sorted
        if (!swapped) break;
    }
    return arr;
}


console.log(optimizedBubbleSort(arr));  // Output: [0, 1, 2, 3, 5, 6, 9]

//Implement Bubble Sort to sort an array of integers in ascending order.
let array = [13, 1, 4, 2, 18];
let numbers = [];
numbers = [...array]
function generateBars() {
    const barsContainer = document.getElementById("bars");
    barsContainer.innerHTML = "";  // Clear previous bars
    numbers = [...array];  // Reset numbers array

    for (let i = 0; i < numbers.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = numbers[i] * 20 + "px"; // Scale for visibility
        bar.textContent = numbers[i]; // Display number on bar
        barsContainer.appendChild(bar);
    }
}
async function visualizeSort() {
    let bars = document.getElementsByClassName("bar");
    let n = numbers.length;
    console.log(bars);
    console.log(n);
    for(let i = 0; i< n-1; i++) {
        let swapped  =false;
        for(let j= 1; j < n - i; j++) {
            bars[j].style.backgroundColor = "red";   // Highlight compared elements
            bars[j - 1].style.backgroundColor = "red";
            await new Promise(resolve => setTimeout(resolve, 500));
            if(numbers[j-1] > numbers[j]) {
                [numbers[j-1], numbers[j]] = [numbers[j], numbers[j-1]];
                bars[j-1].style.height = numbers[j-1] * 20 + "px";
                        bars[j].style.height = numbers[j] * 20 + "px";
                        bars[j-1].textContent = numbers[j-1];
                        bars[j].textContent = numbers[j];
            }
        }
    }
}
let arr1 = [5, 6, 1, 9, 4];
let n = arr1.length;
function ascendingSort(arr1) {
    for(let i = 0; i< n-1; i++) {
        let swapped  =false;
        for(let j= 1; j < n - i; j++) {
            if(arr1[j-1] > arr1[j]) {
                let temp = arr1[j-1];
                arr1[j-1] = arr1[j];
                arr1[j] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr1;
}
console.log(ascendingSort(arr1));

//Modify the Bubble Sort to sort an array in descending order.
let arr2 = [12, 7, 10, 4, 15];
let n1 = arr1.length;
function descendingSort(arr2) {
    for(let i = 0; i< n1-1; i++) {
        let swapped  =false;
        for(let j= 1; j < n1 - i; j++) {
            if(arr2[j-1] <  arr2[j]) {
                let temp = arr2[j-1];
                arr2[j-1] = arr2[j];
                arr2[j] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr2;
}
console.log(descendingSort(arr2));

//Count the Number of Swaps:
let arr4 = [9, 7, 4, 8, 3];


function countSwaps(arr4) {
    let n2 = arr4.length;
    let count = 0;
    for(let i = 0; i< n2-1; i++) {
        let swapped  =false;
        for(let j= 1; j < n2 - i; j++) {
            if(arr4[j-1] > arr4[j]) {
                let temp = arr4[j-1];
                arr4[j-1] = arr4[j];
                arr4[j] = temp;
                swapped = true;
                count++;
            }
        }
        if(!swapped) break;
    }
   return count;
}
console.log(countSwaps(arr4));

//Implement an optimized Bubble Sort where the algorithm exits early if the array is already sorted. Return the sorted array.

let arr5 = [1, 2, 3, 4, 5];

function optimizedBubbleSort1(arr5) {
    let n3 = arr5.length;
    for(let i = 0; i < n3 - 1; i++) {
        let swapped = false;
        for(let j = 1; j < n3 - i; j++) {
            if(arr5[j-1] > arr5[j]) {
                let temp = arr5[j-1];
                arr5[j-1] = arr5[j];
                arr5[j] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr5;
}
console.log(optimizedBubbleSort1(arr5));

//Sort an Array of Strings by Length: 

let arr6 = ["apple", "banana", "kiwi", "orange"];

function sortStrings(arr6) {
    let n4 = arr6.length;
    for(let i = 0; i < n4 - 1; i++) {
        let swapped = false;
        for(let j = 1; j < n4 - i; j++) {
            if(arr6[j-1].length > arr6[j].length) {
                let temp = arr6[j-1];
                arr6[j-1] = arr6[j];
                arr6[j] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr6;

}

console.log(sortStrings(arr6));

//Modify Bubble Sort to work with a custom comparator function, which sorts strings lexicographically.
let arr7 = ["apple","anjeer", "orange", "banana", "kiwi"];
console.log(optimizedBubbleSort1(arr7));

//Use Bubble Sort to sort an array of objects by a specific property (e.g., sorting students by their grades).

let students = [ { name: "John", grade: 90 }, { name: "Jane", grade: 85 }, { name: "Bob", grade: 92 } ];
function propertySort(students) {
    let n4 = students.length;
    for(let i = 0; i < n4 - 1; i++) {
        let swapped = false;
        for(let j = 1; j < n4 - i; j++) {
            if(students[j-1].grade > students[j].grade) {
                let temp = students[j-1];
                students[j-1] = students[j];
                students[j] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return students;
}
console.log(propertySort(students));

//Implement without using built-in to know if it is sorted or un sorted
function bubbleSort(arr8) {
    let n = arr8.length;

    // Check if the array is already sorted
    let isSorted = true;
    for (let i = 1; i < n; i++) {
        if (arr8[i - 1] > arr8[i]) {
            isSorted = false;  // If we find an unsorted pair, the array is not sorted
            break;
        }
    }

    // If already sorted, return the array without further sorting
    if (isSorted) {
        console.log('Array is already sorted!');
        return arr8;
    }

    // Bubble Sort Process
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;  // Flag to check if any swap happens
        for (let j = 1; j < n - i; j++) {
            if (arr8[j - 1] > arr8[j]) {
                let temp = arr8[j - 1];
                arr8[j - 1] = arr8[j];
                arr8[j] = temp;
                swapped = true;
            }
        }
        // If no swaps were made, break out of the loop early
        if (!swapped) break;
    }

    return arr8;
}

let arr8 = [2, 5, 8, 10];
console.log(bubbleSort(arr8));  // Expected Output: Array is already sorted! [2, 5, 8, 10]

//Optimize the Bubble Sort algorithm to exit early if the array is already sorted.

function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 10000));
}
let largeArray = generateRandomArray(1000);

console.time('Optimized Bubble Sort with Early Exit');
let sortedArray = optimizedBubbleSort1(largeArray);
console.timeEnd('Optimized Bubble Sort with Early Exit');

let arrayForComparison = generateRandomArray(1000);
console.time('Bubble Sort without Early Exit');
let sortedArrayWithoutExit = bubbleSort(arrayForComparison);
console.timeEnd('Bubble Sort without Early Exit');

