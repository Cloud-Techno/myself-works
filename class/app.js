//Student ===> Subclass
//Person ====Super Class 


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
class Student extends Person{
    constructor(name,surname,age,job){
        super(name,surname,age);
        this.job = job;
    }
    hobby(){
        console.log("Good hobby makes happy our life")
    }
};




const ferdi = new Person("Ferdi", "Ates",32);
const derya = new Student ("Derya","Ates",32,"Tennis");

console.log(ferdi);
console.log(derya);

console.log(ferdi instanceof Person);
console.log(derya instanceof Student);
console.log(derya instanceof Person);

