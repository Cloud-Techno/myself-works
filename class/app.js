class Person {
    constructor(name,surname,age){
        this.name = name,
        this.surname = surname,
        this.age = age
        }
         func (){
            return this.name + " " + this.surname;   
    }
}

const ferdi = new Person("Ferdi", "Ates",32);

class Student extends Person{};
//Student ===> Subclass
//Person ====Super Class 
const derya = new Student ("Derya","Ates",32);

console.log(ferdi);
console.log(derya);

console.log(ferdi instanceof Person);
console.log(derya instanceof Student);
console.log(derya instanceof Person);