//implicit conversions

console.log(23+'2');  //Output:232   converted to string
console.log(23*'2');  //Output:46    converted to number
console.log(23-'2');  //Output:21    converted to number
console.log(false-true); //Output:-1 true=1; false=0
console.log(true-null);  //Output:1  null=0


//Explicit Conversions
console.log("marie"=="Mmrie"); //output: false
console.log("marie"==="marie"); //Output:true
console.log('53'===String(53));  //Output:true

//implicit type coercision
console.log(10+'');  //Output: 10 (converted to string)
console.log(true+''); //Output: true(converted to string)
console.log(+'10'+20); //Output:30 (+ converted 10 to Number)

//explicit type coercision
console.log(String(true)); //output: true
console.log(String(-42.5)); //Output:-42.5
console.log(Boolean(0));    //Output: false
console.log(Boolean(23));   //Output: true
console.log(Boolean(undefined));  //Output:false
