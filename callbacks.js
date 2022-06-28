/*//CALLBACKS

setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});
*/
function attachEventListeners(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Button Clicked",++count);
    });
}
attachEventListeners();