const form = document.getElementById('film-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');
const cardBody = document.querySelectorAll('.card-body')[1];
const clearFilm = document.getElementById('clear-films');

const ui = new UI();
const storage = new Storage();

eventListener();

function eventListener(){
    form.addEventListener('submit',addFilm);
    cardBody.addEventListener('click',deleteFilm);
    clearFilm.addEventListener('click',deleteAllFilms);
    document.addEventListener('DOMContentLoaded',function(){
        let films = storage.getFilmFromStorage();
        ui.loadAllFilms(films);

    });
}
function deleteAllFilms(){
    ui.deleteAllFilmsFromUI();
    storage.deleteAllFilmsFromStorage();
}
function deleteFilm(e){
    if (e.target.id ==='delete-film')

    e.target.parentElement.parentElement.remove();
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    ui.displayMessages('film is deleted','success');
    

}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === '' || director ===''|| url ===""){

        ui.displayMessages('Fill all inputs please...','danger');
    }
        else{
 const newFilm = new Film (title,director,url);

        ui.addFilmToUI(newFilm);
        ui.displayMessages('Successfull...','success');
        storage.addFilmToStorage(newFilm);
        }

       
    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}