// Starting Code: What megan came up with

function squareEveryDigit(number) {
  let newString = ""+number
  let newNumber = ""
  for (let i = 0; i < newString.length; i++) {
    newNumber=newNumber+(newString[i]*newString[i])
  }
 return newNumber
}
console.log(squareEveryDigit(946)); // When running 946, you should see a result of 811636
