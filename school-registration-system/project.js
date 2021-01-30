/**
 * Musterman Okulu tarafindan ogrenci kayit sistemi talebinde bulunuldu;
 * Ogrenci bilgileri girilerek baska bir tabloya kayit edilmesi
 *  1-kayit sonrasi inputlar temizlenmesi
 *  2-kayit yapildiktan sonra baska bir array icerisinde objeler olusturup tutulmasi
 *  3-kayit sonrasi toplam ogrenci hesaplanacak . array icerisindeki index sayisi uzerinden hesaplanabilir
 *  4-kayit yapilan tabloda delete butono olmasi ve listenin guncellenmesi(toplam ogrenci sayisinin guncellenmesi dahil)
 * 
 */

 const form = document.getElementById("student-form");
 const nameElement = document.getElementById("student-name");
 const surnameElement = document.getElementById("student-surname");
 const ageElement = document.getElementById("student-age");
const registerCard = document.getElementById("register-card");
const allStudentListElement = document.getElementById("all-students-list");
const studentsListElement = document.getElementById("telefon");

let studentList =[];

allEventListener();

 function allEventListener(){
     form.addEventListener("submit",addStudent);
     studentsListElement.addEventListener("click",deleteStudent);
      
 }

 function addStudent(e){

        const name = nameElement.value.trim();
        const surname = surnameElement.value.trim();
        const age = ageElement.value.trim();

        if(name ==="" || surname==="" || age===""){
            // if there is any empty input, will show alert
            showAlert('danger',"Please fill all information");
        }
        else{
            //New Student Object
            const newStudent = new Student(name,surname,age);

             // create student list array and then push to new student's information
            studentList.push(newStudent);
            addStudentToUI(studentList);
            showAlert('success',"Successfully")
        }
//clear all input value after added
clearInputs(nameElement,surnameElement,ageElement);

    e.preventDefault();
 }

 function deleteStudent(e){
   /*  let clickedDeleteStudent = e.target;
    if(clickedDeleteStudent.className.toLowerCase() ==="btn"){
            let index = parseInt(clickedDeleteStudent.id);
            
            studentList.splice(index,1);

            addStudentToUI(studentList);
    } */
    console.log(e.target.tagName());
}