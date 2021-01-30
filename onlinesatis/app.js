
let basketList = [];


 document.getElementById('products-container').innerHTML= createProductCatalog(productList);
 document.getElementById('products-container').addEventListener('click',addProductToBasket);
 document.getElementById('basket-container').addEventListener('click',removeProductToBasket);
