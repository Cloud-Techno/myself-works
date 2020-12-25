//how can use setTimeout

/*
* setTimeout(function(){
*   console.log('hello');
*   },5000);
*/

const love = 'love';

let i = 0;
let value = setInterval(function(){
    i++;
    console.log('I',love,"You",i);
},1000);
// clearInterval works for stop setInterval
document.getElementById('btn').addEventListener('click',function(){
    clearInterval(value);
});
