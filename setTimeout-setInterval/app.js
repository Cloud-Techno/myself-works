//how can use setTimeout

/*
* setTimeout(function(){
*   console.log('hello');
*   },5000);
*/

let i =0;
let value = setInterval(function(){
    i++;
    console.log('Number:',i);
},1000);