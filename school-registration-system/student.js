 //Create new Student Object
function Student (name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

// Add the value of students informations 
function addStudent(e){
    // Get value of Students Information
    const name = nameElement.value.trim(); // regulate the input value what if there is scape
    const surname = surnameElement.value.trim();
    const age = ageElement.value.trim();

    //If input is empty then let the User know
    if(name ==="" || surname==="" || age===""){
       showAlert('danger',"Please fill all information");
    }
    else{
        //Create new Student Object
        const newStudent = new Student(name,surname,age);

         // create student list array and then push to new student's information
        studentList.push(newStudent);
        //creat students on the UI
        addStudentToUI(studentList); 
        showAlert('success',"Successfully")
        
    }
//clear all input value after added
clearInputs(nameElement,surnameElement,ageElement);

e.preventDefault();
}

// Registred students list array
let studentList =[];

// If User click the Delete Button , Student will remove from Registration List
function deleteStudent(e){
    let clickedDeleteStudent = e.target;
    
    if(clickedDeleteStudent.className ==="btn btn-danger"){
        let index = parseInt(clickedDeleteStudent.id);
       //Delete Student by index number in the Array.  
        studentList.splice(index,1);
        addStudentToUI(studentList);
        showAlertForTotal("danger","deleted from registered List.....");
    }
    ;
}