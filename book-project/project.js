const form = document.getElementById("film-form");
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');

//objeler basliyor

const ui = new UI();




eventListeners();
function eventListeners(){
form.addEventListener('submit',addFilm);



}




function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        ui.dispalyMessage("Lutfen tum degerleri giriniz",'danger')
    }
    else {
        const newFilm = new Film(title,director,url); //obje olusturuyoruz

        ui.addFilmToUI(newFilm);

    }
    
    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}