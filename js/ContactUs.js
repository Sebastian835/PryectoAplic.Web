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

jQuery.validator.addMethod(
  "validemail",
  function (value, element) {
    if (this.optional(element)) {
      return true;
    }

    var isValid = false;
    var apiKey = "API"; // 6577a236dc2343b6b2194e83cc637aae
    var url =
      "https://emailvalidation.abstractapi.com/v1/?api_key=" +
      apiKey +
      "&email=" +
      value;

    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      async: false,
      success: function (response) {
        if (response.deliverability === "DELIVERABLE") {
          isValid = true;
        }
      },
    });

    return isValid;
  },
  "Please enter a valid email address."
);

jQuery.validator.addMethod(
  "lettersonly",
  function (value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  },
  "Enter only letters"
);

jQuery.validator.addMethod(
  "startsWith09",
  function (value, element) {
    return this.optional(element) || /^09/.test(value);
  },
  'Phone number should start with "09".'
);

$(function () {
  $("form[name='contacUS']").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 3,
        maxlength: 50,
        lettersonly: true,
      },

      lastName: {
        required: true,
        minlength: 3,
        maxlength: 50,
        lettersonly: true,
      },

      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        startsWith09: true,
      },

      email: {
        required: true,
        validemail: true,
      },
      message: {
        required: true,
      },
    },
    // Mensajes especificos de error de validacion
    messages: {
      firstName: {
        required: "Enter your name",
      },
      lname: {
        required: "Enter your last name",
      },
      phone: {
        required: "Please enter your mobile number",
        minlength: "Your mobile number must be 10 digits long",
        maxlength: "Your mobile number must be 10 digits long",
      },
      email: {
        required: "Please enter an email address",
      },
      message: {
        required: "Write your message",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
