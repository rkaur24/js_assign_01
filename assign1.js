let myarr = []   //creating an empty array

myarr.push('first')   //adding element to the end of the array
console.log(`Array after adding element : ${myarr[0]}`)  //loging the value to console

myarr.unshift('second')   //adding element to the beginning of the array
console.log(`Array after adding another element is : `)
myarr.forEach((item , index) => 
{console.log(`${index}: ${item}`)})

myarr.push('three')   //adding another element to the end of array
console.log(`Array after adding 3rd element is : `)
myarr.forEach((item , index) => 
{console.log(`${index}: ${item}`)})

myarr.pop()  //removing element form end of array

myarr.shift()   //removing element form beginning of array


console.log(`Array after removing elemnts from end and back is : `)     //logging array to console   
myarr.forEach((item , index) => 
{console.log(`${index}: ${item}`)})