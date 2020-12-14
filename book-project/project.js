const form = document.getElementById('book-form');
const titleElement = document.getElementById('title');
const autorElement = document.getElementById('autor');
const urlElement= document.getElementById('url');
const cardbody = document.querySelectorAll('.card-body')[1];
const clear = document.getElementById('clear-books');


//create UI Object

const ui = new UI;

//create Storage Object
const storage = new Storage();


eventListener();

function eventListener(){
    form.addEventListener("submit",addBook);
    document.addEventListener('DOMContentLoaded',function(){
       let books = storage.getBookFromStorage();
       ui.loadAllBooks(books);
   });

   cardbody.addEventListener('click',deleteBook);
   clear.addEventListener('click',deleteAll);
}

function addBook(e){
    const title = titleElement.value;
    const autor = autorElement.value;
    const url = urlElement.value;
    
    if(title === "" || autor === ""|| url === "" ){
        ui.displayMessage('Please enter all info...','danger');
    }


else{
    const newBook = new Book(title,autor,url);
    ui.addBookToUI(newBook);
    storage.addBookToStorage(newBook);
    ui.displayMessage('Successfull...','success');
}
  
    e.preventDefault();
}

function deleteBook(e){
   if (e.target.id === 'delete-book'){
        ui.deleteBookFromUI(e.target);
        storage.deleteBookFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage('deleted process is successful..','success');
    } 
   }

   function deleteAll(){
       ui.clearAllBooksFromUI();
       storage.clearAllBooksFromStorage();

   }