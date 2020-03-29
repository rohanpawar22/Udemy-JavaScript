const output = fizzbuzz(3);
console.log(output);

//Divisible by 3 => Fizz
//Divisible by 5 => BUzz
//Divisible by 3 & 5 => FizzBuzz 
//Not Divisible by both => Same number 
//Not a number => NaN


function fizzbuzz(input)
{
    if(typeof input !== 'number' )
    return NaN;

    if((input % 3 === 0) && (input % 5 == 0))
    return 'FizzBuzz';

    if(input % 3 === 0)
    return 'Fizz';

    if(input % 5 === 0)
    return 'Buzz';

    return input;

}