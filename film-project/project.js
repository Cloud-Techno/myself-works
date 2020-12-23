const form = document.getElementById('film-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');

const ui = new UI();
const storage = new Storage();

eventListener();

function eventListener(){
    form.addEventListener('submit',addFilm);
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