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

function addTooCart() {
  const thisProductCard = this.closest('.product');
  const clonThisProductCard = thisProductCard.cloneNode(true);

  clonThisProductCard.classList.add('cart-product');
  clonThisProductCard.querySelector('.btn-cart').remove();
  clonThisProductCard.insertAdjacentHTML('afterbegin', '<div class="close-cartProduct">&#10060;</div>');
  const a = clonThisProductCard.querySelector('.close-cartProduct');

  a.addEventListener('click', () => {
    a.closest('.cart-product').remove();

  });


  // clonThisProductCard.prepend(removeProduct);

  asideCart.appendChild(clonThisProductCard);


}

for (let btnCart of btnCarts) {
  btnCart.addEventListener('click', addTooCart);
}

const divCloseCartProduct = asideCart.getElementsByClassName('close-cartProduct');
console.log(divCloseCartProduct);

for (let divClose of divCloseCartProduct) {
  divClose.addEventListener('click', function () {
    // clonThisProductCard.remove();
    console.log(this.divClose);

  })
}

//asideCart.getElementsByClassName