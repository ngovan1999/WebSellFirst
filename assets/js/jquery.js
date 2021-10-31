$(document).ready(function () {
  $("#resizing_select").change(function () {
    $("#width_tmp_option").html($("#resizing_select option:selected").text());
    $(this).width($("#width_tmp_select").width());
  });
});

