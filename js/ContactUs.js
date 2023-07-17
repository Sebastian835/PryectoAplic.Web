$(document).ready(function () {
  $("#hiddenFormContainer").hide();
});

$(document).ready(function () {
  $(".btn-custom-work").click(function () {
    $("#largeFormContainer").fadeOut("fast", function () {
      $("#hiddenFormContainer").fadeIn("slow");
    });
  });
});

$(document).ready(function () {
  $(".btn-custom").click(function () {
    $("#largeFormContainer").fadeIn("slow", function () {
      $("#hiddenFormContainer").fadeOut("fast");
    });
  });
});
