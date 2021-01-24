let products = productList.map((product,index)=>{
    return `<div class="card">
    <img src="${product.productImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.productName}</h5>
      <p class="card-text">Calori ${product.totalCalories}</p>
      <p class="card-text"><small class="text-muted">Price:${product.price}</small></p>
      <button  id='${index}'type="button" class="btn btn-primary">BUY</button>
      </div>
  </div>`
}).join('')

document.getElementById('card-products').innerHTML = products;

function a (){
  basket.map((selectedProduct,index)=>{
    return `<div class="card">
    <img src="${selectedProduct.productImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${selectedProduct.productName}</h5>
      <p class="card-text">Calori ${selectedProduct.totalCalories}</p>
      <p class="card-text"><small class="text-muted">Price:${selectedProduct.price}</small></p>
      <button  id='${index}'type="button" class="btn btn-primary">remove</button>
      </div>
  </div>`
}).join('')

document.getElementById('basket-products').innerHTML = productsBasket;
}