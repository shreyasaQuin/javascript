//A closure is a function having access to the parent scope, even after the parent function has closed.
function x(num){
    var a = 7;
    console.log(num)
}
x(function y(){
    var x =20
});
//Output : [Function:y]

//closure
//Closure = Function+lexical scope
function m(){
    var a = 25
    function n(){
        console.log(a);
    }
    return n;
}
var p = m()
console.log(p)  //Output: [Function: n];
p();  //Output: 25

//.......

function mn(){
    var l = 25
    function nm(){
        console.log(l);
    }
    l=350
    return nm;
}
var p = mn()
console.log(p)  //Output: [Function: n];
p();  //Output: 350


function zz(){
    var i = 900;
    function xx(){
        var j = 25;
        function yy(){
            console.log(i,j);
        }
        yy();
    }
    xx();
}
zz();

//Set Timeout

function f(){
    var k = 100;
    setTimeout(function(){
        console.log(k); //will print 100 after 1 seconds
    },1000);
}
f();


//Set Timeout+closure

function abc(){
    for(var b=1;b<=5;b++){
        setTimeout(function(){
            console.log(b); //will print 6,6,6,6,6
        },b*1000);       
    }
}
abc();

function xyz(){
    for(let b=1;b<=5;b++){
        setTimeout(function(){
            console.log(b); //will print 1,2,3,4,5
        },b*1000);       
    }
}
xyz();

function pqr(){
    for(var g=1;g<=5;g++){
        function on(l){
            setTimeout(function(){
                console.log(l); //will print 1,2,3,4,5
            },l*1000);  
        }  
        on(g);   
    }
}
pqr();