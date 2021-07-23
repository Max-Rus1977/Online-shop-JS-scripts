/* Burger menu */
let burgerMenu = document.querySelector('.burger');
let allMobailMenu = document.querySelector('.header-menu');

burgerMenu.addEventListener('click', openMenu);
function openMenu() {
  burgerMenu.classList.toggle('_burger-animate');
  allMobailMenu.classList.toggle('_visibl-mabale-menu');
}

/* Scroll animste */
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight; //Получаем высоту элемента

      const animItemOffset = offset(animItem).top; //Позиция обекта

      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart; //Точка старта
      //window.innerHeight высота окна браузера
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (!animItem.classList.contains('_anim-no-hide')) {
        animItem.classList.remove('_active');
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }
    }
  }
  function offset(el) {
    let rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

/* Parallax animate First screen */
document.addEventListener('mousemove', parallax);

function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

/* -Modals- */
const btnUser = document.querySelector('.btn-user');
const btnPhone = document.querySelector('.btn-phone');
const btnTheanks = document.querySelector('.btn-theanks');
const btnErorr = document.querySelector('.btn-erorr');
const modalUser = document.querySelector('.modal-user');
const modalPhone = document.querySelector('.modal-phon');
const modalTheanks = document.querySelector('.modal-thanks');
const modalErorr = document.querySelector('.modal-erorr');
const coloseModal = document.querySelectorAll('.wrap-closes');

btnUser.addEventListener('click', openModalUser);
function openModalUser() {
  modalUser.classList.add('modal-visibl');
}

btnPhone.addEventListener('click', openModalPhone);
function openModalPhone() {
  modalPhone.classList.add('modal-visibl');
}

btnTheanks.addEventListener('click', openModalTheanks);
function openModalTheanks() {
  modalTheanks.classList.add('modal-visibl');
}

btnErorr.addEventListener('click', openModalErorr);
function openModalErorr() {
  modalErorr.classList.add('modal-visibl');
}

/* Closes modals */
for (let i = 0; i < coloseModal.length; i++) {
  coloseModal[i].onclick = function () {
    this.closest('.modal').classList.remove('modal-visibl');
  }
}

/* Scroll menu */
const anchors = document.querySelectorAll('a[href*="#id"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (eveniet) {
    eveniet.preventDefault();
    const blockId = anchor.getAttribute('href').substr(1);
    document.getElementById(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}