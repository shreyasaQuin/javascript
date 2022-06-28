// call stack maintains order of execution and execution contexts
var n = 2
function square(num){
    var ans = num*num;
    return ans;
}
var square3 = square(10)
console.log(square(2))
console.log(square3)

var x=1;
a();
b();
console.log(x)
function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}

//Every execution context has a reference to its outer environment, and that outer environment is called Lexical Environment.
// lexical environment = local memory+reference to lexical environment of parent

function two(){
    console.log(a);
  }
  function one(){
    var a=2;
    console.log(a);
    two();
  }
  var a=1;
  console.log(a);
  one();
  //Output 1 2 1

  function one(){

    function two(){
     console.log(a);
    }
  
    var a=2;
    console.log(a);
    two();
  }
  
  var a=1;
  console.log(a);
  one();

  //Output: 1 2 2  

  //BLOCK SCOPED AND SHADOWING

  var x = 100
  {
    var x=10
    let y=20
    const z=30
    console.log(x)
    console.log(y)
    console.log(z)
  }
  console.log(x) //Output: 10 (a=100 is shadowed by a=10 )
  //console.log(y) //Output: Error as we accessing variable which is not defined in global scope
  //console.log(z)

  let q=100
  const r=25
  {
    var p=10
    let q=20
    const r=30
    console.log(p)
    console.log(q)
    console.log(r)
  }
  console.log(p) //Output: 10
  console.log(q)  //Output:100
  console.log(r)  //Output:25


  //LEXICAL SCOPE

  const c = 100
  {
    const c = 25
    {
        const c = 35
        console.log(c);
    }
  }