document.getElementById('btn').addEventListener('click',function(){
    
    const xhr = new XMLHttpRequest();

        xhr.onprogress = function(){
            console.log('process is working ...',this.readyState);
        }
    xhr.onload = function(){
        if(this.status == 200){
            
            document.getElementById('ajax').textContent = this.responseText;
        }
    }



   /*  xhr.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            console.log(this.responseText);
        }
    } */
    xhr.open('GET','example.txt',true);



    xhr.send();

});