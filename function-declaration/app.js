//FUNCTIONS

// Function Declaration // Statement
//function declaration works as HOISTED

/* function square(num){
    return (num * num);
}
square(5);
console.log(square(5)); */ //--->  invoke

//function Expression
/* const square = function (num){
    return(num * num);
}

console.log(square(5)); */

//FIRST CLASS FUNCTIONS

/* const myArr = [6,"Ferdi", function(){
    console.log("Array Element"); 
}]
myArr[2]();*/

// output
/* Arry Element */

/* 
const myObj = {
    age: 5,
    name: "Ferdi",
    func: function(){
        console.log("Object Element");
    }
};
myObj.func();
output : Object Element

//function Expression is not HOISTED */
//function Expression can be anonymous

/* const addFive = function(num,func){
    console.log(num+func());
}

addFive(10, function(){
    return 5;
});

output: 15 */


//we can use func inside another function
/* const myFunc = function(num){
    return function toDouble(){
        console.log(num*2);
    }
}
myFunc(2)(); */


//IIFE
//immediately Invocable Function Expresion

const sum = function (){
    console.log(5+11);
}
sum();