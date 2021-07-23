const productMinus = document.querySelector('.product-minus-js');
const productAmount = document.querySelector('.product-amount-js');
const productPlus = document.querySelector('.product-plus-js');

let productAmountData = 1;

function clearClass() {
  productAmount.classList.remove('amount-bounce');
}

function increaseAmountProduct() {
  productAmount.innerText = ++productAmountData;
  productAmount.classList.add('amount-bounce');
  setTimeout(clearClass, 300);
}

function subtractionAmountProduct() {
  if (productAmountData >= 2) {
    productAmount.innerText = --productAmountData;
    productAmount.classList.add('amount-bounce');
    setTimeout(clearClass, 300);
  }
}

productMinus.addEventListener('click', subtractionAmountProduct);
productPlus.addEventListener('click', increaseAmountProduct);