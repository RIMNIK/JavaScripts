
const num = prompt("Enter a number");
console.log(num);

if(num < 0)
{
    console.log(`Error! Factorial for negative number does not exist.`); 
}
else if (num === 0)
{
    console.log(`The factorial of ${num} is 1`);
}
else
{
    let fact = 1;
    for(i=1; i<=num ; i++)
    {
        fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);
}


