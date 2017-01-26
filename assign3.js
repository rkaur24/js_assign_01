const values = process.argv  //storing values from console

let num1 = Number(values[2])
let num2 = Number(values[3])

let sum = num1 + num2

let output;

if(sum>10 && sum<100)   //if sum is less than 100 but greater 10
{
    output=`The sum is greater than 10 but less than 100`
}

else if(sum>100 && sum<1000)  //if sum is less than 1000 but greater 100
{
     output = `The sum is greater than 100 but less than 1000` 
}

console.log(output)     