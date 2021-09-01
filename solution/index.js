
// 1) -------------------------------------------------------
let numbers = [0,1,2,3,4,5,6,7,8,9]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// Q: What is the time complexity of the for loop?
// ANSWER: O(n)


// 1.2) You are challenged to find the 4th element of the array, and you came up with this solution:

var count = 1
var answer = 0

for (let i = 0; i < numbers.length; i++) {
    if (count === 4) {
        answer = numbers[i]
        return
    } else {
        count += 1
    }
}
// Q: What is the time complexity of of this solution?
// ANSWER: O(1)


// Q: Could you come up with a solution that has a better time complexity? If so, what is that time complexity?
// ANSWER: No. While a for-loop is typically O(n), this code used inside this for-loop prevents it from exceeding past 4 run-throughs.


// 2) -------------------------------------------------------
function printA() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
// Q: What is the time complexity of the function?
// ANSWER: O(1)


// 3) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i)
  }
}
// Q: What is the time complexity of the function?
// ANSWER: O(n)


// 4) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j)
    }
  }
}
// Q: What is the time complexity of the function?
// ANSWER: O(n^2)


// 5) -------------------------------------------------------
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(j)
  }
}
// Q: What is the time complexity of the nested for loop?
// ANSWER: O(n^2)


// 6) -------------------------------------------------------
let newNumbersA = numbers.filter((num) => {
  return num < 5
})
// Q: What is the time complexity of the filter higher-order function?
// ANSWER: O(n)


// 7) -------------------------------------------------------
let newNumbersB = numbers.map((num) => {
  return num * 3
})
// Q: What is the time complexity of the map higher-order function?
// ANSWER: O(n)


// 8) -------------------------------------------------------
function removeNum() {
    numbers.splice(3,1)
}
// Q: What is the time complexity of the function?
// ANSWER: O(n)


// 9) -------------------------------------------------------
function insertNum() {
    numbers.splice(3, 0, 19)
}
// Q: What is the time complexity of the function?
// ANSWER: O(n)


// 10) -------------------------------------------------------
function pushNum() {
    numbers.push(25)
}
// Q: What is the time complexity of the function?
// ANSWER: O(1)


// 11) -------------------------------------------------------
// Given an array of names....
function printFirstTwoNames(array) {
    console.log(array[0])
    console.log(array[1])
}

// Q: What is the time complexity of the function? Could we write this function differently to accomplish the goal of the function in a faster time complexity?
// ANSWER: O(1)