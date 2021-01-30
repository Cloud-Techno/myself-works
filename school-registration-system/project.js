/**
 * Musterman Schoool request from us to make a Students Registration System on the Website;
 *  1-Creating Student Object for Students List Array that include value of Student's information 
 *  2-Clear Inputs after registration
 *  3-Calculate Total Students number and show the bottom of site. I can find it by Array lenght. and uptdate after every registration 
 *  4-Put the Delete button. and give the click event that delete Student Object in Array on Delete Button. 
 *  5- Let User Know after every click button by alert method.
 */

 // Getting elements from UI 
 const form = document.getElementById("student-form");
 const nameElement = document.getElementById("student-name");
 const surnameElement = document.getElementById("student-surname");
 const ageElement = document.getElementById("student-age");
const registerCard = document.getElementById("register-card");
const allStudentListElement = document.getElementById("all-students-list");
const totalStudentElement = document.getElementById("total-student");
const students = document.getElementById("students");


// all events in this function
allEventListener();

 function allEventListener(){
     form.addEventListener("submit",addStudent);
     allStudentListElement.addEventListener("click",deleteStudent);
      
 }


