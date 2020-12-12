const nameElement = document.getElementById('name');
const form = document.getElementById('book-form');
const autorElement = document.getElementById('autor');
const urlElement = document.getElementById('url');


// objects  create

const ui = new UI();

//ALL event create

eventListener();

function eventListener(){
    form.addEventListener('submit',addFilm);

    
}


function addFilm(e){
    const name= nameElement.value;
    const autor= autorElement.value;
    const url= urlElement.value;

    if (name === '' || autor === "" || url === ""){
        ui.displayMessage('Please enter Info...','danger');
    }
    else {
        const newBook = new Book(name,autor,url);

        ui.addBookToUI(newBook);
    }
e.preventDefault();
}