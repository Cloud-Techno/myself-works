const nameElement = document.getElementById('name');
const form = document.getElementById('book-form');
const autorElement = document.getElementById('autor');
const urlElement = document.getElementById('url');
const cardBody = document.querySelectorAll('.card-body');

// objects  create

const ui = new UI();

// storage object create

const storage = new Storage();

//ALL event create

eventListener();

function eventListener(){
    form.addEventListener('submit',addFilm);
    document.addEventListener('DOMContentLoaded',function(){
        let books = storage.getBookFromStorage();
        ui.loadAllBooks(books);
    });
    cardBody.addEventListener('click',deleteBook);

    
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
        storage.addBookToStorage(newBook);
    }
e.preventDefault();
}

function deleteBook(e){
    if ( e.target.id === 'delete-book'){
        ui.deleteBookFromUI(e.target)
    }
}