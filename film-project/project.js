const form = document.getElementById('book-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');

const ui = new UI();

eventListener();

function eventListener(){
    form.addEventListener('submit',addFilm);
}

function addFilm(e){
    


    e.preventDefault();
}