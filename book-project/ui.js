function UI(){

}
UI.prototype.displayMessages(message,type);

const cardBody = document.querySelector('.card-body');

const div = document.createElement('div');

div.className = `alert alert-${type}`;
div.textContent = message;

cardBody.appendChild(div);