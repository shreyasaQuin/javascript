// variables are of three types var,let and const
let namee; //undefined as it is not initialized
var age;  // undefined as not initialized

//console.log(xyz)   Reference Error as variable not declared or initialized

abc = 45;  // global variable as not declared with let or var or const
console.log(abc)

//Non Strict mode examples

var a = 20
var a = 30
console.log(a)  // Output : 30

var n_ame = "Mark"
console.log(n_ame) // Output : Mark
var n_ame;
console.log(n_ame)  //Output : Mark

//varialbe hoisting; is mentioning all declarations at the top
console.log(x);
var x = 2
console.log(x);

var xy;
console.log(xy);
xy=7;
console.log(xy);

/*                  let                                                var
            scope: block in which it is defined                    scope: globla variable
            window_Object: variable not added                      window_object: variable added
            same variable cannot be declared multiple times        same variable can be declared multiple times
            hoisting not possible                                  hoisting possible
*/

// javascript is dynamically typed language as data type not fixed and can store any type of data

var value = "shreyy"
console.log(typeof(value)) // Output:string
value = 9
console.log(typeof(value)) //Output: number


// const keyword should be initialized when declared and cannot be reassigned
const pi=3.14
console.log(pi)
/*pi=31.4
console.log(pi)*/  // Output: TypeError: Assignment to constant variable

const car = {company: "BMW"}
console.log(car)
car.company = "Audi" //Changing the property of const variable
console.log(car) //We cannot reassign but can change properties of const variable