/* async function test(data){
   return data;
}

test('Hello World').then(response=> console.log(response)); */

async function testData(data){

    let promise = new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(typeof data ==='string'){
                resolve(data)
            }
            else{
                reject(new Error('Please enter a string value'))
            }           
        },5000)
    });
    const response = await promise;
    return response;
}

testData(3)
.then(data => console.log(data))
.catch(err => console.log(err))