function process1(callback){
    setTimeout(function(){
        console.log('Process 1');
        callback();
    },3000);
}

function process2(){
    setTimeout(function(){
        console.log('Process 2');
       
    },2000);
}

process1(process2);