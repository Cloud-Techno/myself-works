//obj.func () ----> this obj
//this         ----> window (global)
 

/*  function Person (name,surname,age,){
    this.name = name;
    this.surname=surname;
    this.age = age;
    func = function(){
        return this.name + " " + this.surname
    }
}

Person();
 */


//class version
/* class Person {
    constructor(name,surname,age){
        this.name = name;
        this.surname=surname;
        this.age = age;
    }
    func = function(){
        return this.name + " " + this.surname;
    }
        
    }

const ferdi = new Person ("Ferdi","Ates",32);
const derya = new Person ("Derya","Ates",32);

console.log(ferdi);
console.log(derya);  */


//////////////////////////////
/* 
const ferdi = {
    name: "Ferdi",
    age: 5,
    surname: "ates",
    fullName: function(){
        console.log(this); // reference in this object: output "ferdi" 5 "ates"
        return this.name + " " + this.surname; 
    }
}

console.log(ferdi);
console.log(ferdi.fullName()); */

//output :
//{name: "Ferdi", age: 5, surname: "ates", fullName: ƒ}
//{name: "Ferdi", age: 5, surname: "ates", fullName: ƒ}
//Ferdi ates

/* const vedat = {
    name: "vedat",
    fullName: function(){
        console.log(this ===vedat); 
        console.log(this === window)
    }
}
const fun = vedat.fullName;
console.log(fun()); */



const ferdi = {
    name: "ferdi",
    fullName: function(){
        console.log(this === ferdi); 
        setTimeout (function() {            /// setTimeout is a global func. that s why output is window
            console.log(this === ferdi); 
            console.log(this === window)
        },2000);
        
    }
}
console.log(ferdi.fullName());

//output:
//true
 ///////after 2 second
// false
 //true
