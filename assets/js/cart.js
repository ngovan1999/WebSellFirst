// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i];
  button.addEventListener("click", function () {
    var button_remove = event.target;
    button_remove.parentElement.parentElement.remove();
  });
}

function updateCart() {
  var cart_product = document.getElementsByClassName("cart-product")[0];
  var cart_rows = document.getElementsByClassName("cart-row");
  var total = 0;
  var total_price = 0;
  var totalitem = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i];
    var price_item = cart_row.getElementsByClassName("cart-price")[0];
    var quantity_item = cart_row.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(price_item.innerText); // chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value; // lấy giá trị trong thẻ input
    total = total + price * quantity;
    total_price = price * quantity;
    document.getElementsByClassName("price-item-total")[i].innerText =
      "TỔNG: " + total_price + "đ";
  }

  document.getElementsByClassName("total-price")[0].innerText =
    "TỔng: " + total + "đ";
}

// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target;
    if (isNaN(input.value) || input.value < 0) {
      input.value = 1;
    }
    updateCart();
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

menuTab();