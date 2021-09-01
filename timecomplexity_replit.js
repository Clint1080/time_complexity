// O(1) - Constant Time

// O(n) - Linear Time

// O(n^2) - Quadratic Time

// O(1) - Constant Time
// let x = 20 + 3

// 3 steps ===> O(1)
// let y = (20 * 3) / 4 + 3

// Constant O(1), no changing value
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 0;

// Linear time
// for(let i = 0; i < numbers.length; i++) {
//   x += 2
//   console.log(x)
// }

// for(let i = 0; i < numbers.length; i++) {
//   x += 2
//   console.log(x)
// }

// for(let i = 0; i < numbers.length; i++) {
//   x += 2
//   console.log(x)
// }

// for(let i = 0; i < numbers.length; i++) {
//   x += 2
//   console.log(x)
// }

for (let i = 0; i < numbers.length; i++) {
  x += 2;
  console.log(x);
  for (let j = 0; j < numbers.length; j++) {
    x += 2;
    console.log(x);
  }
}
