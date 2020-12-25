//Ajax, callback, http Request

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    get(url,callback){
        this.xhr.open("GET",url);
        this.xhr.onload= () =>{
            if (this.xhr.status === 200) {
                callback(null,this.xhr.responseText);
            }
            else{
                console.log('ERROR...',null)
            }
        };
        this.xhr.send();
    }
}

const request = new Request();

request.get('https://jsonplaceholder.typicode.com/albums',function(err,response){
    if (err === null){
        //successfully
        console.log(response);
    }
    else{
        console.log(err);
    }
});
