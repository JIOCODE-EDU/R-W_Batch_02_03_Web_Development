// Number Method

// 1. Number Creation & Type casting

console.log(10);

const num1 = 10

console.log(num1);

const num2 = 3.14 

console.log(num2);

const num3 = 1.56e7

console.log(num3);

const num4 = 0xfff;

console.log(num4);

const num5 = parseInt("10")

console.log(num5);

const num6 = parseInt(10.20)

console.log(num6);

const num7 = parseFloat(10.20)

console.log(num7);

const num8 = Number("10")

console.log(num8);

let num9 = 456 // unary plus 

console.log(num9++);
console.log(num9);

console.log((typeof num1));

console.log(typeof num2);

console.log(num1 * "str");

console.log(typeof Infinity);

console.log(typeof NaN);
 
{
  console.log(Number.isFinite(45));
  console.log(Number.isFinite(Infinity));
  

  console.log(Number.isFinite(NaN));
  console.log(Number.isInteger(10));
  console.log(Number.isInteger(10.20));

  console.log(Number.isNaN(10 * "str"));

  console.log(Number.isNaN(NaN));

  console.log(Number.isNaN("Hello"));

  console.log(Number.isSafeInteger(4500000000000000000000000000000));

  {
    // toFixed

    const num = 12.5000

    // const result = num.toFixed(0)
    // const result = num.toFixed(1)
    // const result = num.toFixed(2)

    // console.log(result);
    
  }

  {
    // toString

    const num = 125000

    console.log(typeof num.toString());
    
  }

  {
    // toExponential

    const num = 44600000

    const result = num.toExponential(0)

    console.log(result);
    
  }

  {
    // toPricision

    const num = 456.566

    const result = num.toPrecision(100)

    console.log(result);
    
  }
  
  
  
  
  
  
  


}

















