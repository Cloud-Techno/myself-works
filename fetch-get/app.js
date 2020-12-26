class Request{


  get(url){
    return new Promise(function(resolve,reject){
      fetch(url)
    .then(response =>response.json())
    .then(data=>resolve(data))
    .catch(err=>reject(err))
    })
      }
}

const request = new Request();
let album;
request.get('https://jsonplaceholder.typicode.com/albums')

.then(album=>console.log(album))
.catch(err => console.log(err))