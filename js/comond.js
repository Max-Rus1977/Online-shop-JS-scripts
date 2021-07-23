const productMinus = document.querySelectorAll('.product-minus-js');
const productAmount = document.querySelectorAll('.product-amount-js');
const productPlus = document.querySelectorAll('.product-plus-js');

let productAmountData = 1;



function clearClass() {
  productAmount.classList.remove('amount-bounce');
}

function a() {

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

for (let plus of productPlus) {
  plus.addEventListener('click', increaseAmountProduct);
}

for (let minus of productMinus) {
  minus.addEventListener('click', subtractionAmountProduct);
}