const form = document.getElementById('book-form');
const titleElement = document.getElementById ('title');
const autorElement = document.getElementById('autor');
const urlElement = document.getElementById('url');

const ui = new UI();

eventListener();

function eventListener(){
    form.addEventListener('submit',addBook);
}

function addBook(e){

    const title = titleElement.value;
    const autor = autorElement.value;
    const url = urlElement.value;

    if (title ==='' || autor === "" || url === ''){
        //displaye messages
    }
    else {

        const newBook = new Book(title,autor,url);

        ui.addBookToUI(newBook);

    }




    e.preventDefault();
}

