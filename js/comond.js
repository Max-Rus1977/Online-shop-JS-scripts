const productMinus = document.querySelectorAll('.product-minus-js');
const productPlus = document.querySelectorAll('.product-plus-js');



function increaseAmountProduct() {

  const thisProductCounter = this.closest('.wrapper-product__counter');
  const productAmount = thisProductCounter.querySelector('.product-amount-js');
  console.log(productAmount);

  let productAmountData = productAmount.textContent;

  productAmount.innerText = ++productAmountData;
  console.log(productAmountData);

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