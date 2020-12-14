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


`


    
;}