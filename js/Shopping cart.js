$(document).ready(function() {
    $("#seguir").click(function(event) {
      event.preventDefault();
      $("body").fadeOut(500, function() {
        window.location.href = "Sneakers.html";
      });
    });
  });

  $(document).ready(function() {
    $("body").fadeIn(2000);
  });