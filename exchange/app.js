document.getElementById("exchange").addEventListener('click',change);

function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText);
            console.log(response);
            const rate = response.rates.CHF;
            const amount = parseInt (document.getElementById('euro').value); 
            document.getElementById('frank').value = amount * rate;
        }

    }

    xhr.send();

}