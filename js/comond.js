const productMinus = document.querySelectorAll('.product-minus-js');
const productPlus = document.querySelectorAll('.product-plus-js');


function increaseAmountProduct() {

  const thisProductCounter = this.closest('.wrapper-product__counter');
  const productAmount = thisProductCounter.querySelector('.product-amount-js');

  let productAmountData = productAmount.textContent;

  productAmount.innerText = ++productAmountData;

  function clearClass() {
    productAmount.classList.remove('amount-bounce');
  }

  productAmount.classList.add('amount-bounce');
  setTimeout(clearClass, 300);
}

function subtractionAmountProduct() {
  const thisProductCounter = this.closest('.wrapper-product__counter');
  const productAmount = thisProductCounter.querySelector('.product-amount-js');

  let productAmountData = productAmount.textContent;

  if (productAmountData >= 2) {
    productAmount.innerText = --productAmountData;

    function clearClass() {
      productAmount.classList.remove('amount-bounce');
    }
    productAmount.classList.add('amount-bounce');
    setTimeout(clearClass, 300);
  }

}

for (let plus of productPlus) {
  plus.addEventListener('click', increaseAmountProduct);
}

for (let minus of productMinus) {
  minus.addEventListener('click', subtractionAmountProduct);
}

/* Добавление товара в корзину */

const asideCart = document.querySelector('.aside-cart-js');
const btnCarts = document.querySelectorAll('.btn-cart');
const blockBasketEmpty = document.querySelector('.aside-cart__content');

let productId = '';
let counter = 0;

function addTooCart(event) {


  counter++;
  if (counter > 0) {
    blockBasketEmpty.classList.add('_not-visible')
  }

  disabletBtn(event);
  blockItProductCounter(event);

  const thisProductCard = this.closest('.product');
  const clonThisProductCard = thisProductCard.cloneNode(true);

  clonThisProductCard.classList.add('cart-product');
  clonThisProductCard.querySelector('.btn-cart').remove();
  clonThisProductCard.insertAdjacentHTML('afterbegin', '<div class="close-cartProduct">&#10060;</div>');
  const deleteProductCart = clonThisProductCard.querySelector('.close-cartProduct');

  deleteProductCart.addEventListener('click', () => {
    productId = deleteProductCart.closest('.cart-product').id;
    deleteProductCart.closest('.cart-product').remove();

    const removeBlockElements = document.getElementById(productId);
    const btnRemoveDisadlet = removeBlockElements.querySelector('.btn-cart');
    btnRemoveDisadlet.disabled = false;
    btnRemoveDisadlet.classList.remove('disablet-btn');
    btnRemoveDisadlet.innerText = 'В карзину';

    removeBlockElements.querySelector('.wrapper-product__counter').classList.remove('js-stile');

    counter--;
    if (counter <= 0) {
      blockBasketEmpty.classList.remove('_not-visible')
    }
  });

  asideCart.appendChild(clonThisProductCard);

}

function disabletBtn(event) {
  event.target.disabled = true;
  event.target.classList.add('disablet-btn');
  event.target.innerText = 'товар в карзине';
}

function blockItProductCounter(event) {
  event.target.closest('.product').querySelector('.wrapper-product__counter').classList.add('js-stile');
}

for (let btnCart of btnCarts) {
  btnCart.addEventListener('click', addTooCart);
}

const divCloseCartProduct = asideCart.getElementsByClassName('close-cartProduct');
//console.log(divCloseCartProduct);

for (let divClose of divCloseCartProduct) {
  divClose.addEventListener('click', function () {
    //console.log(this.divClose);

  })
}

/* Карзина */

