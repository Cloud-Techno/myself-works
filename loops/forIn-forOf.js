//for ....in / for ...of 

//usage

/* for(variable in object){
statement
} */

/* for(variable of object){
statement
} */

let person = { 
    fname:"ferdi",
    lname:"Ates",
    age:31    
}

let arr = [3,5,7];
arr.foo = "hello"



let text ="";
for (let x in person){
    text +=person[x];
    console.log(x);
};
console.log(text);
