function priceFormat(pMoney){
    return pMoney.toFixed(2);
}

 function updataBasketList(pList){
        document.getElementById('basket-container').innerHTML = createBasket(pList);
 }

 function createBasket(pList){
       return `
       <table>
            ${createBasketItems(pList)}
            ${calculateTotalSection(pList)}

        </table>` 
 }

 function createBasketItems(pList){
     
    return pList.map((item,index) =>`
    <tr>
   <td>${item.productName}</td>
   <td>${item.totalCalories}</td>
   <td>${formatDate(item.expireDate)}</td>
   <td>${item.price}</td>
   <td><img src='${item.productImage}'></td>
   <td><button id='${index}'>DELETE</button></td>
   </tr>
    `).join('');
 }

 function calculateTotalSection(pList){
        let total=0;
        pList.forEach(item=> total += item.price);

        return `
        <tr>
        <td colspan='2'>Total</td>
        <td colspan='2'>${priceFormat(total)} Fr</td>
       
        </tr>
        `;
 }

 function removeProductToBasket(e){
    let clickedButton = e.target;
    if(clickedButton.tagName.toLowerCase() ==='button'){
            let index = parseInt(clickedButton.id);
            
            basketList.splice(index,1);

            updataBasketList(basketList);
    }
}