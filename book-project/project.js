const nameElement = document.getElementById('name');
const form = document.getElementById('book-form');
const autorElement = document.getElementById('autor');
const urlElement = document.getElementById('url');


// objects  create

const ui = new UI();

//ALL event create

eventListener();

function eventListener(e){
    form.addEventListener('click',addFilm);




    e.preventDefault();
}


function addFilm (){
    const name= nameElement.value;
    const autor= autorElement.value;
    const url= urlElement.value;

    if (name === '' || autor === "" || url === ""){
        ui.displayMessage('Please enter Information','danger');
    }





}