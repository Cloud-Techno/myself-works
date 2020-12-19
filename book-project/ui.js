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
    UI.prototype.loadAllBooks= function(books){
    const bookList = document.getElementById('books');

    books.forEach(function(book){
        bookList.innerHTML +=`
            <tr>
                <td><img src="${book.url}" class="img-fluid img-thumbnail"></td>
                <td>${book.title}</td>
                <td>${book.autor}</td>
                <td><a href="#" id = "delete-book" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
         `;
    })
    
    }

UI.prototype.deleteBookToUI = function(element){
    element.parentElement.parentElement.remove();

}
UI.prototype.clearInputs= function(element1,element2,element3){
    element1.value = '';
    element2.value = '';
    element3.value = '';
}

UI.prototype.displayMessages = function (message,type){
    const cardBody= document.querySelector('.card-body');

    const div = document.createElement('div');

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2000);
}