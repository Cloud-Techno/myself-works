//OBJECT

//Object Literal
/* const person = {

    name: "Ferdi",
    surname: "Ates",
    age:31,
    languages: ["English","German","Italian","Turkish"],
    fullname: function(){
        return this.name + " " + this.surname
    },
    address: {
        city: "Lugano",
        district:"Cadro"
    }
}

console.log(person); */

//dot Notation
/* console.log(person.name);
console.log(person.fullname());
person.job = "Student";
console.log(person.job);
 */

//CONSTRUCTOR --->
 /* function Person(name, surname, age){
  
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function(){
        return this.name + " " + this.surname
    }
    } 

const person1 = new Person("Ferdi","Ates",31);
const person2 = new Person("Vedat","Ates",8);
console.log(person1);
console.log(person2); */

//OBJECT CONSTRUCTOR

/* const person1 = new Object();
person1.name = "Ferdi";
person1.surname = "Ates";
person1.age = 31;
person1.fullname = function(){
    console.log(this);
    return this.name + ' '+ this.surname;
} */

/* person1.languages = ["Turkish","Englis"];

person1.fullname();
console.log(person1.age); */

// Object create with Object.create() code // inheritance
const person = {
    name: "Ferdi",
    surname: "Ates",
    age:31,
    languages: ["English","German","Italian","Turkish"],
    fullname: function(){
        return this.name + " " + this.surname;
    }
}

const ferdi = Object.create(person);
ferdi.name = "Ferdi";
ferdi.surname ='Ates';
ferdi.age = 31;

console.log(ferdi);
console.log(ferdi.fullname());