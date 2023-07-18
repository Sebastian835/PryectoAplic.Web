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

$(document).ready(function () {
  // Validación para el campo firstName al enviar el formulario
  $("form").on("submit", function (e) {
    var firstName = $("#firstName").val().trim();

    if (firstName === "") {
      e.preventDefault(); // Evita el envío del formulario
      alert("Por favor, ingresa tu nombre.");
    }
  });
});
