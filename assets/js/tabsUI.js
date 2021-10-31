function tabsUI(){
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});
}

function menuTab(){
  const menubar = document.querySelector(".header-top > i");
  const closebtn = document.querySelector(".header-nav > i");
  menubar.addEventListener("click", function () {
    document.querySelector(".header-nav").style.transform = "translateX(0%)";
    document.querySelector(".header-nav").style.opacity = "1";
  });
  closebtn.addEventListener("click", function () {
    document.querySelector(".header-nav").style.transform = "translateX(-100%)";
    document.querySelector(".header-nav").style.opacity = "0";
  });
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlideshow");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function Loadmore(){
  const loadMoreSale = document.querySelector('#load-more-sale');
let currentItemsSale = 4;
loadMoreSale.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.product-sale .product-list .product-item')];
    for (let i = currentItemsSale; i < currentItemsSale + 4; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'block';
        }
    }
    currentItemsSale += 4;

    // Load more button will be hidden after list fully loaded
    if (currentItemsSale >= elementList.length) {
        event.target.style.display = 'none';
    }
});

const loadMoreLike = document.querySelector('#load-more-like');
let currentItemsLike = 4;
loadMoreLike.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.product-like .product-list .product-item')];
    for (let i = currentItemsLike; i < currentItemsLike + 4; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'block';
        }
    }
    currentItemsLike += 4;

    // Load more button will be hidden after list fully loaded
    if (currentItemsLike >= elementList.length) {
        event.target.style.display = 'none';
    }
});
const loadMoreNew = document.querySelector('#load-more-new');
let currentItemsNew = 4;
loadMoreNew.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.product-new .product-list .product-item')];
    for (let i = currentItemsNew; i < currentItemsNew + 4; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'block';
        }
    }
    currentItemsNew += 4;

    // Load more button will be hidden after list fully loaded
    if (currentItemsNew >= elementList.length) {
        event.target.style.display = 'none';
    }
});
}

Loadmore();

tabsUI();
menuTab();
