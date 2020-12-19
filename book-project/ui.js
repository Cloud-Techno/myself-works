function UI(){

}
UI.prototype.addBookToUI = function (newBook){
    const bookList = document.getElementById('books');


    bookList.innerHTML +=`
            <tr>
                <td><img src="${newBook.url}" class="img-fluid img-thumbnail"></td>
                <td>${newBook.title}</td>
                <td>${newBook.autor}</td>
                <td><a href="#" id = "delete-book" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
      `;

}
UI.prototype.clearInputs= function(element1,element2,element3){
    element1.value = '';
    element2.value = '';
    element3.value = '';
}
