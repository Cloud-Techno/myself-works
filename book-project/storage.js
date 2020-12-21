function Storage(){

}

Storage.prototype.addBookToStorage = function (newBook){
    let books = this.getBookFromStorage();
    books.push(newBook);

    localStorage.setItem('books',JSON.stringify(books));
}

Storage.prototype.getBookFromStorage = function(){
    let books;
    if (localStorage.getItem('books')===null){
        books =[];
    }
    else{
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}

Storage.prototype.deleteBooksFromStorage= function(bookTitle){
    let books = this.getBookFromStorage();


    //
    books.forEach(function(book,index){
        if(book.title === bookTitle) {
            books.splice(index,1);
        }
    });

    localStorage.setItem('books',JSON.stringify(books));
}