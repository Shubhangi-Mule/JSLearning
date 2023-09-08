// function with no argument and no return value
function show(){
    console.log("My name is shubhangi");
    console.log("Angular developer");
    console.log("tech Skill - HTML + CSS + Angular");
}
show();  // function call or invoke

console.log("-----------------------------------");

// function with argument and no return value

function checkType(value){
   console.log("value is -",value);
   console.log("type is -",typeof value);
   console.log('-----------------------------');
}
checkType(100);
checkType("SM");
checkType(true);
checkType(null);
checkType(undefined);
checkType();

// function with argument and return value
function addition(arg1,arg2,arg3){
        console.log("values is :",arg1,arg2,arg3);
        var result=arg1+arg2+arg3;
        return result;
}
var res=addition(10,20,30);   
console.log("result is ",res);
var res=addition(-10,40,60);  // we can write same variable and diff
console.log("result is",res1);
var res2=addition("sm",30,"pune");
console.log("result is ",res2);

// function no argument with return value
function display(){
    return "learning js"
}
var res=display();
console.log();