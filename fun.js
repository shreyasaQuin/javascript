a();
function a(){
    console.log("a called");
}

var b = function(){
    console.log("b called")
}
b();


//ANONYMOUS FUNCTIONS
//they are used in a place where functions are used as values
/*function () {

}*/ 

//Named Function Expression
var c = function xyz(){
    console.log("c called");
    console.log(xyz);  //Output:[Function:xyz]
}
c();
//xyz(); Output: Reference Error


//Parameters and Arguments
var d = function(param1,param2){
    console.log(param1+" "+param2);
}
d(1,2);

//First class Func tion

//The ability to use functions as values is called first class functions

var e = function(param1){
    return function xyz(){

    }
}
console.log(e());  //Output: [ Function xyz]