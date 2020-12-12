function UI(){

}





















UI.prototype.displayMessage = function(message,type){
    const cardBody = document.querySelector('.card-body');
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();


    },2000);


}