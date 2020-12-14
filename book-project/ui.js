function UI(){

}

UI.prototype.addBookToUI = function(newBook){
   


const bookList = document.getElementById('books');

bookList.innerHTML += `
            <tr>
                    <td><img src="${newBook.url}" class="img-fluid img-thumbnail"></td>
                    <td>${newBook.autor}</td>
                    <td>${newBook.title}</td>
                    <td><a href="#" id = "delete-book" class = "btn btn-danger">Book Delete</a></td>
            </tr>
`;
}

UI.prototype.displayMessage = function(message,type){
        const cardBody= document.querySelector('.card-body');

        const div = document.createElement('div');

        div.className = `alert alert-${type}`;
        div.textContent =message;

        cardBody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },2000);
  }

 UI.prototype.loadAllBooks = function(books){
     const bookList = document.getElementById('books');

     books.forEach(function(book){
         bookList.innerHTML += `
            <tr>
                <td><img src="${book.url}" class="img-fluid img-thumbnail"></td>
                <td>${book.title}</td>
                <td>${book.autor}</td>
                <td><a href="#" id = "delete-book" class = "btn btn-danger">Book Delete</a></td>
            </tr>
      `;
     });
    }

    UI.prototype.deleteBookFromUI = function(element){
        element.parentElement.parentElement.remove();

    }
    UI.clearAllFilmsFromUI= function(){
        const filmList = document.getElementById('books');

        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();

        }
    }