//Ajax, callback, http Request

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    get(url,callback){
        this.xhr.open("GET",url);
        this.xhr.onload= () =>{
            if (this.xhr.status === 200) {
                callback(this.xhr.responseText);
            }
        };
        this.xhr.send();
    }
}

const request = new Request();

request.get('https://jsonplaceholder.typicode.com/albums',function(response){
    console.log(response);
});
