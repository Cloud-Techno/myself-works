function Storage(){

}

Storage.prototype.addBookToStorage = function(newBook){
    let books;

    if (localStorage.getItem('books')===null){
        books =[];
    }
    else{

        books = JSON.parse(localStorage.getItem('books'));
    }
        return books;
    
}