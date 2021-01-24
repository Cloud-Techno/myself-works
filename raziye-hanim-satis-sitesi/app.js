/**
 * Cabbar beyin komsusu Raziye hanim benim de bir online satis sitem neden olmasin diyerek HiCoders dan yardim istemektedir.
 * Sitede urunler bolumu database den alinarak UI da olusturulmasi icin fonksiyon yazilmasi.
 * Secilen urune eventListener uygulanmasi
 * Secilen urunleri sepete eklenmesi icin baska bir array olustur ve bunu UI da olusmasi icin fonskiyon yazilmasi. 
 * 
 * 
 */

const cardProduct = document.getElementById('card-products');
const sepet = document.getElementById('basket-products');


let basket = [];

eventListener();

function eventListener(){
    cardProduct.addEventListener('click',createBasket)
}
 
function createBasket(e){
    let clickedProduct = e.target;
    if(clickedProduct.className ==='btn'){
        let index = +clickedProduct.id;
        let selectedProduct = productList[index];

        basket.push(selectedProduct);
        a(basket);
    }
   }



