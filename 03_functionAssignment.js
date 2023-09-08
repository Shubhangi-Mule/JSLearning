console.log('----step1------')
function show(){
    console.log("hello");
}
show();
function display(){
    console.log("js learning");
}
display();

console.log("------step2-------");
 function personalDetails(fname,lname,clgName){
    console.log("Inside function");
    console.log("first name is",fname);
    console.log("last name is",lname);
    console.log("college name",clgName);
 }
 var firstN="shubhangi";
 var lastN="mule";
 var clg="PVPIT";
 personalDetails(firstN,lastN,clg);

 console.log('----------step3-----------');
 function swapValues(num1,num2){
        console.log("Before swap-",'num1',num1,'num2',num2);
        var temp=num1;
        num1=num2;
        num2=temp;
        console.log("after swap-",'num1',num1,'num2',num2);       
 }
 var value1="virat";
 var value2="anushka";
 swapValues(value1,value2);

 var value1=1000;
 var value2=2000;
 swapValues(value1,value2);

console.log('----step4------');
function addThreeValues(arg1,arg2,arg3){
    console.log("values are-",arg1,arg2,arg3);
    var result=arg1+arg2+arg3;
    return result;
}

var value1=addThreeValues(10.23,600,40);
console.log("addition is-",value1);
var value2=addThreeValues("hello","good","Morning");
console.log("additon is ",value2);
