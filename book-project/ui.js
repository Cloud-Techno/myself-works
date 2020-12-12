function UI(){

}

UI.prototype.addBookToUI = function(newBook){
    const bookList = document.getElementById('books');
    bookList.innerHTML +=`
    <tr>
            <td><img src="${newBook.url}" class="img-fluid img-thumbnail"></td>
                <td>${newBook.autor}</td>
                <td>newBook.name</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
}


UI.prototype.displayMessage = function(message,type){
    const cardBody = document.querySelector('.card-body');
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();


    },2000);


}