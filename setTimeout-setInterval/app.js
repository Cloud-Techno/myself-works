//how can use setTimeout

/*
* setTimeout(function(){
*   console.log('hello');
*   },5000);
*/

const love = 'love';
let sayac = [];
let i = 0;
let value = setInterval(function(){
    i++;
    sayac.push("love"); 
  
     
    
    
  

  let deneme=  'I ' +sayac +" you";
  document.getElementById("love").innerHTML = deneme;
},1000);
// clearInterval works for stop setInterval
document.getElementById('btn').addEventListener('click',function(){
    clearInterval(value);
});
