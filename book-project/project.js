const form = document.getElementById('book-form');
const titleElement = document.getElementById('title');
const autorElement= document.querySelector('#autor');
const urlElement = document.querySelector('#url');


const ui = new UI();
//eventler

eventListener();

function eventListener(){
    form.addEventListener('submit',addBook);
}

function addBook(e){
    const title = titleElement.value;
    const autor = autorElement.value;
    const url= urlElement.value;

if ( title==='' || autor === '' || url === ''){
    ui.displayMessages('Please enter all information...', 'danger');
}
else{
    const newBook = new Book(title,autor,url);

    ui.addBookToUI(newBook);
}
e.preventDefault();
}
