const form = document.getElementById ('book-form');
const titleElement = document.getElementById('title');
const autorElement = document.getElementById('autor');
const urlElement = document.getElementById('url');
const cardBody = document.querySelectorAll('.card-body')[1];

const ui = new UI();
const storage = new Storage();

eventListener();

function eventListener(){
    form.addEventListener('submit',addBook);
    cardBody.addEventListener('click',deleteBook);
    document.addEventListener('DOMContentLoaded',function(){
        let books = storage.getBookFromStorage();
         ui.loadAllBooks(books);
      });
}

function addBook(e){
    title = titleElement.value;
    autor = autorElement.value;
    url = urlElement.value;

    if (title ===''|| autor ==='' || url === ''){

        ui.displayMessages('please enter all input...','danger');
    }
    else{
        const newBook = new Book(title,autor,url);

        ui.addBookToUI(newBook);
        storage.addBookToStorage(newBook);
       
    }
    ui.clearInputs(titleElement,autorElement,urlElement);

    e.preventDefault();
}
function deleteBook(e){
    if(e.target.id ==='delete-book'){
        ui.deleteBookFromUI(e.target);
       storage.deleteBooksFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        }
    
}