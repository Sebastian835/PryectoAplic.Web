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
  $("#contacUS").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 3,
      },
    },
    messages: {
      firstName: {
        required: "Por favor, introduzca su Nombre",
        minlength: "El nombre debe tener al menos 4 caracteres.",
      },
    },
    submitHandler: function (form) {
      var firstNameValue = $("#firstName").val().trim();
      if (firstNameValue === "") {
        // Crear el modal
        var modal = $(
          '<div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="errorModalLabel" aria-hidden="true"> \
          <div class="modal-dialog" role="document"> \
            <div class="modal-content"> \
              <div class="modal-header"> \
                <h5 class="modal-title" id="errorModalLabel">Error en el formulario</h5> \
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"> \
                  <span aria-hidden="true">&times;</span> \
                </button> \
              </div> \
              <div class="modal-body"> \
                Por favor, ingrese un valor en el campo Nombre. \
              </div> \
              <div class="modal-footer"> \
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button> \
              </div> \
            </div> \
          </div> \
        </div>'
        );

        // Agregar el modal al documento
        $("body").append(modal);

        // Mostrar el modal
        modal.modal("show");

        // Remover el modal del documento después de cerrarlo
        modal.on("hidden.bs.modal", function () {
          modal.remove();
        });

        return false;
      } else {
        form.submit();
      }
    },
  });
});
