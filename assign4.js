const values = process.argv

const mealCost = Number(values[2]) //stroring value of cost of meal in variable 'mealCost'
const tipPercentage = Number(values[3])  //stroring value of tip percentage in variable 'tipPercentage'
const tipAmt = (tipPercentage/100) * mealCost   //calculating tip amount

const totalmealcost = mealCost + tipAmt  //calculating total bill

console.log(`The total bill is  $${mealCost} + $${tipAmt}Tip = $${totalmealcost}`) //logging total bill amount      