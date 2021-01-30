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
     <tr>
    <td>${item.productName}</td>
    <td>${item.totalCalories}</td>
    <td>${formatDate(item.expireDate)}</td>
    <td>${item.price}</td>
    <td><img src='${item.productImage}'></td>
    <td><button id='${index}'>BUY</button></td>
    </tr>
     `).join('');
 }

 function addProductToBasket(e){
    let clickedButton = e.target;
    if(clickedButton.tagName.toLowerCase() ==='button'){
            let index = parseInt(clickedButton.id);
            let selectedProduct = productList[index];
            basketList.push(selectedProduct);

            updataBasketList(basketList);
    }
}