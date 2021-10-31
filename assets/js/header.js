$(document).ready(function () {
    $("#resizing_select").change(function () {
      $("#width_tmp_option").html($("#resizing_select option:selected").text());
      $(this).width($("#width_tmp_select").width());
    });
  });
  
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