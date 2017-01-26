const values = process.argv    //storing values from console in array 'values'

let num1 = Number(values[2])    //converting the values to number
let num2 = Number(values[3])

console.log(`Entered value is ${num1}`) //logging 3rd element of process.argv

let sumtotal = num1 + num2  // adding the values

console.log(`The sum of entered numbers is : ${sumtotal}`)     

