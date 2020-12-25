/*  function process1(callback){
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

process1(process2); */ 

/////////////////////

const langs = ['Python','Java','C++'];

function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log('Added');
        callback();
    },2000);
}
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },2000);
}

addLang('Go',getAllLangs);

/*

* output
Added
Python
Java
C++
Go
 */
/////////////////////////

