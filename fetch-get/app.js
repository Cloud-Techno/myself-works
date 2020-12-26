class Request{


  get(url){
    return new Promise(function(resolve,reject){
      fetch(url)
    .then(response =>response.json())
    .then(data=>resolve(data))
    .catch(err=>reject(err))
    })
    
      }
      post(url,data){
        return new Promise(function(resolve,rejcet){

 fetch(url,{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then(response=>response.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
        }
        )
     }
}

const request = new Request();
/* let album;
request.get('https://jsonplaceholder.typicode.com/albums')

.then(album=>console.log(album))
.catch(err => console.log(err)) */
////////////
request.post('https://jsonplaceholder.typicode.com/albums',{
  title: 'foo',
  body: 'bar',
  userId: 1,
})

.then(newAlbum =>console.log(newAlbum))
.catch(err=>console.log(err));