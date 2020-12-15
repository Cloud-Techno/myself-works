//    ELEMENTLERI SEC

const form = document.getElementById('book-form');
const titleElement = document.getElementById('title');
const autorElement = document.querySelector('#autor');
const urlElement = document.querySelector('#url');


//obje olusturuluyor

    const ui = new UI();


//TUM EVENTLERI BURADA OLUSTUR

eventListeners();

function eventListeners(){
    form.addEventListener('submit',addBook);
}

function addBook(e){
    const title = titleElement.value;
    const autor = autorElement.value;
    const url = urlElement.value;

    if(title === '' || autor === '' || url ===''){
        //hata mesaji yaz
    }
    else {
        const newBook = new Book (title,autor,url);

        ui.addBookToUI(newBook);
    }

    e.preventDefault();
}

