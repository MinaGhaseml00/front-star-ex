var x=3;
var X=2;
var Name = "mina";

document.write("<div class='exercise'><p>exercise 2-4:</p></div> ")
var array= [1 , "hello" , "god" , true];
document.write(array);
document.write("<br>");
document.write(array.sort());
document.write("<br>" + array[1].length);
document.write("<br>");
console.log(Name);

// alert(x);

function sum(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var result = parseInt(num1) + parseInt(num2);
    console.log(result);
    document.getElementById("result").innerHTML=result;
}