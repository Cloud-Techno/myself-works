const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// Start UI Object

const ui = new UI();

//create Object for Storage
const storage = new Storage();



//All events upload

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);

}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

if ( title === "" || director === "" || url === ""){
    //Error warning
    ui.displayMessages("Input all information",'danger');
}
    else {
        /* newFilm */
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages('Film added as succesfully...')
    }

    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}
