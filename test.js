// Starting Code: This is one is mine 
function squareEveryDigit(number) {

  let newNumberArray = Array.from(String(number), Number);
  let newString = ""
  
  for (let i = 0; i < newNumberArray.length; i++) {
    newString += newNumberArray[i]*newNumberArray[i]
  }
  return newString

}
console.log(squareEveryDigit(946)); // When running 946, you should see a result of 811636

// O(1) because we know the value that is being put in    
// If it is array of numbers that we are passing in it would be O(n)
