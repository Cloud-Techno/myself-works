function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){

            resolve('Result of data')
        },10000)
    });
}

console.log(getData('Hello World'));