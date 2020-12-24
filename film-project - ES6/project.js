const form = document.getElementById('film-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');
const cardBody = document.querySelectorAll('.card-body')[1];
const clearFilm = document.getElementById('clear-films');



eventListener();

function eventListener(){
    form.addEventListener('submit',addFilm);
    cardBody.addEventListener('click',deleteFilm);
    clearFilm.addEventListener('click',deleteAllFilms);
    document.addEventListener('DOMContentLoaded',function(){
        let films = Storage.getFilmFromStorage();
        UI.loadAllFilms(films);

    });
}
function deleteAllFilms(){
    if (confirm('Are You sure to clean all film!...')){
 UI.deleteAllFilmsFromUI();
    Storage.deleteAllFilmsFromStorage();

    }
   
}
function deleteFilm(e){
    if (e.target.id ==='delete-film')

    e.target.parentElement.parentElement.remove();
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UI.displayMessages('film is deleted','success');
    

}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === '' || director ===''|| url ===""){

        UI.displayMessages('Fill all inputs please...','danger');
    }
        else{
 const newFilm = new Film (title,director,url);

        UI.addFilmToUI(newFilm);
        UI.displayMessages('Successfull...','success');
        Storage.addFilmToStorage(newFilm);
        }

       
    UI.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}