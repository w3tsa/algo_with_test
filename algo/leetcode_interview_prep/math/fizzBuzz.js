const fizzBuzz = (n) => {
  let output = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        output.push('FizzBuzz');
        break;
      case i % 3 === 0:
        output.push('Fizz');
        break;
      case i % 5 === 0:
        output.push('Buzz');
        break;
      default:
        output.push(String(i));
        break;
    }
  }

  return output;
};

/* 
   if (i % 3 === 0 && i % 5 === 0) {
      output.push('FizzBuzz');
    } else if (i % 3 === 0) {
      output.push('Fizz');
    } else if (i % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(String(i));
    }
  */

console.log(fizzBuzz(15));
