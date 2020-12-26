function getData(data){
    return new Promise(function(resolve,reject){
   setTimeout(function(){     
        if(typeof data === 'string'){
            resolve(data);
        }
        else{
            reject(new Error('please enter the string value'));
        }
        },3000);
    });
}

getData('naber')
.then(response => console.log('this is :'+ response))
.catch(err => console.error(err));


//////////////////////////

//This statement goals for processing two response
/* function addTwo(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (typeof data === 'number'){
                resolve(data+5);
            }
            else{
                reject(new Error('please enter number value'));
            }
        },3000);
    });
}

// We can use only once 'catch';
// but possible to use the 'promise' one more times
addTwo(10)
.then(response=>{
    console.log(response);
    return response + 2; })
.then(function(response2){
    console.log(response2)})
.catch(err=>console.log(err));  */