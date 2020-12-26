class Request {
    get(url){//get Request
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(err => reject(err))

        })
        
    }
}

const request = new Request();
let album;
request.get('https://jsonplaceholder.typicode.com/albums')
.then(data=>{
    album = data;
    console.log(album);
})
.catch(err =>console.log(err));
