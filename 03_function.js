// function declaration
function swap(n1,n2){  // n1 n2 are arguments or parameter      
    console.log("Before Swap=",'n1-',n1,'n2-',n2);
    
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("After Swap =",'n1-',n1,'n2-',n2);
    console.log("-----------------------------------")
}

var num1=100;
var num2=200;
swap(num1,num2);  // function call or invocation

var sweety="sweety";
var cutie="cutie";
swap(sweety,cutie);

var name1="shubhangi";
var name2="sagar";
swap(name1,name2);