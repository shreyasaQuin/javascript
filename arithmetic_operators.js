var num1 = 26;
var num2 = 16;
var dec1 = 21.36;
var dec2 = 14.45;
var name1 = "Mark";
var name2 = "aura";

//Addition Operator
console.log(num1+num2); //Output:42
console.log(name1+name2); // Output:Markaura
console.log(""+num1+num2); //Output:2616

//Substraction Operator
console.log(dec2-dec1);  //Output:-6.91
console.log(name1-name2);  //Output:NaN
console.log(""+num1-num2);  //Output :10

//Multiplication Operator
console.log(num1*num2);  //Output:416
console.log(name1*num1);  //Output:NaN
console.log(dec1*dec2);  //Output:308.652

//Division operator and modulus operator
console.log(num1/num2);  //Output:1.625
console.log(num1/0);     // Output:Infinity
console.log(num1%num2);  //Output:10
console.log(num2%0);     //Output:NaN

console.log(2**3);  //Output: 8 as ** means power

console.log(10-true);  //Output:9 as true is 0
console.log(10-false); //Output:8 as false is 1

console.log(-"2"+3); // "-"converts string to number   Output:1


