let langs = ['Ptyhon','Javascript','java'];



/*//while 
let i = 0;

while (i<langs.length){
    console.log(langs[i]);
    i++
} */


/* for (let i=0; i<langs.length; i++){
    console.log(langs[i]);
} */



langs.forEach(function(langs,i){
    console.log(langs,i);
});