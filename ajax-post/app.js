//ajax post request
class Request {
    constructor(){
        const xhr = new XMLHttpRequest();
    }
   /*  get(url,callback){
        this.xhr.open('GET',url);
        this.xhr.onload = ()=>{
            if (this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else{
            callback('ERROR...',null);
        }
        }
        this.xhr.send();
    } */
   /*  post(url,data,callback){
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
    } */
    put(url,data,callback){
        this.xhr.open('PUT',url);
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
request.put('https://jsonplaceholder.typicode.com/albums/10',{userId:12,title:'tarkan karma'},function(err,response){
    if(err === null){
        console.log('success')
    }
    else{
        console.log(err);
    }
});