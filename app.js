/*console.log('hola mundo');*/
const p_name = document.querySelector('#productName');
const p_price = document.querySelector('#productPrice');
const b_save = document.querySelector('#btn-save');
const b_clear = document.querySelector('#btn-clear');
const p_list = document.querySelector('#product-list');
const p_total = document.querySelector('#total');

let total = 0;

const createNewProduct = ( name,price) => {
    const ionCard = document.createElement('ion-card');
    const newProductItem = document.createElement('ion-card-content');
    newProductItem.textContent = name + ': $' + price;
    ionCard.appendChild(newProductItem);
    p_list.appendChild(ionCard);
}
const clearInputs = () =>{
    p_name.value = '';
    p_price.value = '';
}

const presentAlert = () =>{
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Data';
    alert.subHeader = 'Please verfy your inpust';
    alert.message = 'Incorrect Name or Price';
    alert.buttons = ['accept'];

    document.body.appendChild(alert);
    return alert.present();
} 

const isEmpty = str => !str.trim().length;

b_save.addEventListener('click',()=>{

    const name = p_name.value;
    const price = p_price.value;
    
    if(isEmpty(name) || price<=0 || isEmpty(price)){
        presentAlert();
        return;
    }

    createNewProduct(name,price);
    total = total + parseInt(price) ;
    p_total.textContent=total;
    clearInputs();

});

b_clear.addEventListener('click',clearInputs);