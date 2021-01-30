function formatDate(pDate){
    return pDate.toLocaleDateString('de-CH');
 }

 
 
 function createProductCatalog(pList){ 
     return`
     <table>
        ${createProductCatalogHeader()}
        ${createProductLines(pList)}
     </table>
     `;
 }
 function createProductCatalogHeader(){ 
     return `
    <tr>
    <th>Name</th>
    <th>Calory</th>
    <th>Exp.Date</th>
    <th>Price</th>
    </tr>
    `;
}
 function createProductLines(pList){
     return pList.map((item,index) =>`
     <div class="card" style="width: 18rem;">
     <img src="${item.productImage}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${item.productName}</h5>
       <p class="card-text">Total Calories: ${item.totalCalories}</p>
       <p class="card-text">price: ${item.price}</p>
       <p class="card-text">Expire Date: ${formatDate(item.expireDate)}</p>
       <button id='${index}'>BUY</button>
     </div>
   </div>
     `).join('');
 }

 function addProductToBasket(e){
    let clickedButton = e.target;
    if(clickedButton.tagName.toLowerCase() ==='btn'){
            let index = parseInt(clickedButton.id);
            let selectedProduct = productList[index];
            basketList.push(selectedProduct);

            updataBasketList(basketList);
    }
}