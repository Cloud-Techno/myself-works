function addStudentToUI(pNewStudent){
    students.innerHTML = createStudent(pNewStudent);
    totalStudentElement.innerHTML = totalStudent(pNewStudent);
}

function createStudent(pList){
    return pList.map((item,index) =>`
    <tr>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.age}</td>
        <td><a href="#" id = "${index}" class = "btn btn-danger">Delete</a></td>
   </tr>
    `).join('');
}
//after add, this function will delete all in value
function clearInputs(pNameElement,pSurnameElement,pAgeElement){
    pNameElement.value = '';
    pSurnameElement.value = '';
    pAgeElement.value = '';
}
//just in case the error or missing inputs
function showAlert(type,message){
   const alert = document.createElement('div');
   alert.className = `alert alert-${type}`;
   alert.textContent = message;
   form.appendChild(alert);

   setTimeout(function(){
alert.remove();
   },1000);
    
}
function totalStudent (pRegistredList){
    return`
    <tr >
        <th scope="col"><strong>Total</strong></th>
        <th scope="col">${pRegistredList.length}</th>
    </tr>    
            `;
       
    }

    //when clicked the delete button for remove the student. showing alert
    function showAlertForTotal(type,message){
        const alertToList = document.createElement('div');
        alertToList.className = `alert alert-${type}`;
        alertToList.textContent = message;
        totalStudentElement.appendChild(alertToList);
     
        setTimeout(function(){
     alertToList.remove();
        },1000);
         
     }