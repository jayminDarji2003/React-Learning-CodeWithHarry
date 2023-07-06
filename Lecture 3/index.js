"use strict";
// Lec - 3 : JavaScript refresher

// variable
let a = 10
let b = "jaymin darji"
console.log(a);
console.log(b);
// d = 65

// functions
function hello(){
    console.log("hey jay hello!");
}
hello();

// objects
const obj = {
    r : 32,
    b : 54,
    c : 12,
    func : function myfunc(number) {
        console.log("The number is : " ,number);
    }
}

console.log(obj);

document.addEventListener("click",function click(){
    console.log("Click on document");
    let conf = confirm("You clicked!!")
    console.log(conf);
});

setTimeout(()=>{
    console.log("hii me setTimeout function hun");
},3000);
console.log("main neche wali string hun");