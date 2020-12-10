 function Person (name,surname,age,){
    this.name = name;
    this.surname=surname;
    this.age = age;
    func = function(){
        return this.name + " " + this.surname
    }
}

Person();



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