var productsAPI = "http://localhost:3000/products";
var newsAPI = "  http://localhost:3000/news";
var introAPI = "  http://localhost:3000/introduce";
var postAPI = "  http://localhost:3000/post";

function start() {
  getProducts(renderProductsSale);
  getProducts(renderProductsNew);
  getProducts(renderProductsLike);
  getNews(renderNews);
  getIntro(renderIntro);
  getPost(renderPosts);
}
start();

// function getBtns(products) {
//   var btn = document.getElementsByClassName("buy-product");
//   var cart_product = document.getElementsByClassName("cart-product");
//   for (let index = 0; index < btn.length; index++) {
//     var add_btn = btn[index];

// }

function getProducts(callback) {
  fetch(productsAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderProductsSale(products) {
  var listProducts = document.querySelector("#list-sale");
  var htmls = products.map(function (product) {
    if (product.status == "sale") {
      return `
      <div class="col l-3 m-6 c-12 product-item" id="abc">
        <div class="border-item">
            <div class="product-item-img">
              <img src="${product.Image}" alt="">
              <div id="${product.id}" class="order-buy">
                <button class="buy-product">Buy now</button>
              </div>
            </div>
          <div class="product-item-des">
            <a href="">${product.des}</a>
            <div class="cost">
              <del>${product.delcost}</del>
              <p>${product.cost}<u>đ</u></p>
            </div>
          </div>
        </div>
      </div>
      `;
    }
  });
  listProducts.innerHTML = htmls.join("");
}
function renderProductsLike(products) {
  var listProducts = document.querySelector("#list-like");
  var htmls = products.map(function (product) {
    if (product.status == "like") {
      return `
      <div class="col l-3 m-6 c-12 product-item">
        <div class="border-item">
            <div class="product-item-img">
              <img src="${product.Image}" alt="">
              <div class="order-buy">
                <button class="buy-product">Buy now</button>
              </div>
            </div>
          <div class="product-item-des">
            <a class="a" href="">${product.des}</a>
            <div class="cost">
              <del>${product.delcost}</del>
              <p>${product.cost}<u>đ</u></p>
            </div>
          </div>
        </div>
      </div>
      `;
    }
  });
  listProducts.innerHTML = htmls.join("");
}

function renderProductsNew(products) {
  var listProducts = document.querySelector("#list-new");
  var htmls = products.map(function (product) {
    if (product.status == "new") {
      return `
      <div class="col l-3 m-6 c-12 product-item">
        <div class="border-item">
            <div class="product-item-img">
              <img src="${product.Image}" alt="">
              <div class="order-buy">
                <button class="buy-product">Buy now</button>
              </div>
            </div>
          <div class="product-item-des">
            <a href="">${product.des}</a>
            <div class="cost">
              <del>${product.delcost}</del>
              <p>${product.cost}<u>đ</u></p>
            </div>
          </div>
        </div>
      </div>
      `;
    }
  });
  listProducts.innerHTML = htmls.join("");
}

function getNews(callback) {
  fetch(newsAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderNews(news) {
  var listNews = document.querySelector("#list-news");
  var htmls = news.map(function (newsItem) {
    return `
      <a href="" class="row tab-news-item">
        <img class="col l-4" src="${newsItem.Image}" alt="">
        <div class="col l-8 tab-news-item-title">
          <h2>${newsItem.title}</h2>
          <p>${newsItem.des}</p>
        </div>
      </a>
      `;
  });
  listNews.innerHTML = htmls.join("");
}

function getIntro(callback) {
  fetch(introAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderIntro(intro) {
  var listIntro = document.querySelector("#list-intro");
  var htmls = intro.map(function (introItem) {
    return `
      <img src="${introItem.Image}" alt="">
      <h3>${introItem.title}</h3>
      <p>${introItem.des}</p>
      `;
  });
  listIntro.innerHTML = htmls.join("");
}

function getPost(callback) {
  fetch(postAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderPosts(posts) {
  var listPosts = document.querySelector("#list-posts");
  var htmls = posts.map(function (postItem) {
    return `
      <div class="tab-post-item">
      <h2>${postItem.title}</h2>
      <a href="${postItem.link}">${postItem.link}</a>
    </div>
      `;
  });
  listPosts.innerHTML = htmls.join("");
}
