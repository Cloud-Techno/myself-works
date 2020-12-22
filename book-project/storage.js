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

Storage.prototype.deleteBookFromStorage=function(bookTitle){
    let books = this.getBookFromStorage();

      books.forEach(function(book,index){

        
    if(books.title ==='bookTitle'){
        // use splice method
        books.splice(index,1);
    }
      })

localStorage.setItem('books',JSON.stringify(books));
    }
