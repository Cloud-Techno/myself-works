//Ajax, callback, http Request

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    //get request
    get(url,callback){
       this.xhr.open('GET',url);
        this.xhr.onload = ()=>{
        
            if(this.xhr.status ===200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback('there is something wrong',null)
            }

        }
       this.xhr.send();
    }
}
post(url,data,callback){
        this.xhr.open('POST',url);
        this.xhr.setRequestHeader('Content-type','application/json');

        this.xhr.onload = () => {
            if (this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }
            else{
                callback('ERROR',null);
            }
            this.xhr.send(JSON.stringify(data));
        }
    }
}

/* const request = new Request();
request.post('https://jsonplaceholder.typicode.com/albums',{userId:2,title:'Triller'},function(err,response){
    if(err === null){
        console.log('success')
    }
    else{
        console.log(err);
    }
}); */
const request = new Request();
request.post('https://jsonplaceholder.typicode.com/albums/10',{userId:12,title:'tarkan karma'},function(err,response){
    if(err === null){
        console.log('success')
    }
    else{
        console.log(err);
    }
});