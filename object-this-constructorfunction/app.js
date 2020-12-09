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
/* const person = {
    name: "Ferdi",
    surname: "Ates",
    age:31,
    languages: ["English","German","Italian","Turkish"],
    fullname: function(){
        return this.name + " " + this.surname;
    }
} */

/* const ferdi = Object.create(person);
ferdi.name = "Ferdi";
ferdi.surname ='Ates';
ferdi.age = 31;

console.log(ferdi);
console.log(ferdi.fullname()); 
-------*/

//COMPUTED PROPERTY NAMES

/* let prop1 = 'name';
let myObj = {
    [prop1] : 'ferdi'
}
console.log(myObj);

output:
{name: "ferdi"} */

//////////

//ESCA6 USINING
/* const person = {
    name: "Ferdi",
    surname: "Ates",
    age:31,
    fullname(){                // no function word
        return this.name + " " + this.surname
    }
} 
--------*/

//OBJECT DESTRUCTURING
/* const books = [
    {
        title: "RED ORANGE",
        author: 'Alexander',
        pageNum:296,
        topic:'about red orange benefits'

    },
    {
        title: "BLUE ORANGE",
        author: 'Micheal',
        pageNum:296,
        topic:'about blue orange benefits'
    },
    {
        title: "YELLOW ORANGE",
        author: 'CICI',
        pageNum:296,
        topic:'about yellow orange benefits'
    }
]

for (const{title,author,pageNum} of books){
    console.log(title + " "+ author + " "+ pageNum);
} 
]output:
yellow orange cici 296
-----------------*/


//SPREAD OPERATOR IN OBJECT LITERALS

/* const person = {
    name: "Ferdi",
    surname: "Ates",
    age:31,
    fullname(){
        return this.name + " " + this.surname
    }
} 
let person2 = {...person};
console.log(person2);

*/

/* 
const myObj1 = {
    name: 'ferdi',
    age:6
}
const myObj2 = {
    job: 'student',
    gender:'male'
}

const ferdi = { 
    ...myObj1,
    school:"ETH University", 
    ...myObj2};
console.log(ferdi); 
----*/

/////////////////////////////////

//REST OBJECT
/* 
const person = {
    name: "Ferdi",
    surname: "Ates",
    age:31,
    fullname(){
        return this.name + " " + this.surname
    }
} 

const {name, ...rest} = person;

console.log(name);
console.log(rest); */

//output:

//Ferdi
// {surname: "Ates", age: 31, fullname: ƒ} rest object output is as object
////////////////////////////////////

//OBJECT VALUES - OBJECT ENTRIES
/* const person = {
    name: "Ferdi",
    surname: "Ates",
    age:31,
    fullname(){
        return this.name + " " + this.surname
    }
} 

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person)); */





