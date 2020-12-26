//Ajax, callback, http Request

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    // GET REQUEST
    get(url,callback){
        this.xhr.open('GET',url);
        this.xhr.onload= ()=>{
            if(this.xhr.status ===200){
                callback(null,this.xhr.responseText);
            }
            else{
                //hata durumunda
                callback('ERROR',null);
            }
        }
        this.xhr.send();
    }
    post(url,data,callback){
        this.xhr.open('POST',url);
        this.xhr.setRequestHeader('Content-type','application/json'); //json adjusted

        this.xhr.onload=()=>{
            if(this.xhr.status ===201){
                callback(null,this.xhr.responseText);
            }
            else{
                console.log('there is sth wrong on post',null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    
}

const request = new Request;
/* request.get('https://jsonplaceholder.typicode.com/albums',function(err,response){
    if (err==null){
        console.log(response);
    }
    else{
        console.log(err)
    }
}); */
request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){
    if (err==null){
        console.log(album);
    }
    else{
        console.log(err)
    }
});
