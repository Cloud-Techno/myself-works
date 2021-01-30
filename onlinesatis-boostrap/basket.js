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
    <div class="card" style="width: 18rem;">
     <img src="${item.productImage}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${item.productName}</h5>
       <p class="card-text">Total Calories: ${item.totalCalories}</p>
       <p class="card-text">price: ${item.price}</p>
       <p class="card-text">Expire Date: ${formatDate(item.expireDate)}</p>
       <button id='${index}'>DELETE</button>
     </div>
   </div>
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