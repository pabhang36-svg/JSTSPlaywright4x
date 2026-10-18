//1. integer literals

//decimal number    

let decimalNumber = 42;
console.log("decimalNumber:", decimalNumber); // Output: 42

//binary number (base 2)
let binaryNumber = 0b101010;
console.log("binaryNumber:", binaryNumber); // Output: 42

//octal number (base 8)
let octalNumber = 0o52; // 0o prefix indicates octal
console.log("octalNumber:", octalNumber); // Output: 42

//hexadecimal number (base 16)  
let hexadecimalNumber = 0x2A; // 0x prefix indicates hexadecimal
console.log("hexadecimalNumber:", hexadecimalNumber); // Output: 42


//2. floating-point literals
let floatingPointNumber = 3.14;
console.log("floatingPointNumber:", floatingPointNumber); // Output: 3.14

//negative number literals
let negativeNumber = -42;
console.log("negativeNumber:", negativeNumber); // Output: -42

//exponent notation
let largeNumber = 5e3;
let smallNumber = 5e-3;
console.log("largeNumber:", largeNumber); // Output: 5000
console.log("smallNumber:", smallNumber); // Output: 0.005

//numeric separators improve readability
let oneMillion = 1_000_000;
console.log("oneMillion:", oneMillion); // Output: 1000000

//BigInt literals use the n suffix for integers larger than Number can safely represent
let bigInteger = 9007199254740993n;
console.log("bigInteger:", bigInteger); // Output: 9007199254740993n
console.log("bigInteger type:", typeof bigInteger); // Output: bigint