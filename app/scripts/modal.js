$("#contactCall").click(function(evt) {
    evt.preventDefault();
    $("#salesModal").modal('show');
    _gaq.push(["_trackEvent", "CTA", "'Contact Call'"]);
    conversionSource = "Menu";
  });

  $("#sendInfo").click(function(evt) {
      var name = $("#inputName").val(),
          email = $("#inputEmail").val(),
          phone = $("#inputPhone").val(),
          company = $("#inputCompany").val(),
          question = $("#inputQuestion").val(),
          sendgridjs_url = "http://csi-mail.herokuapp.com/send",
          to = "sales@collectorsolutions.com",
          subject = "New Inbound Demo Request From Website",
          error = false;

      $("#sendInfo").html("<i class='fa fa-spinner fa-spin'></i>");
      $("#sendInfo").attr("disabled", "disabled");

      if (!name) {
        $("#inputName").addClass("has-warning");
        error = true;
      } else {
        $("#inputName").removeClass("has-warning");
      }

      if (!email) {
        $("#inputEmail").addClass("has-warning");
        error = true;
      } else {
        $("#inputEmail").removeClass("has-warning");
      }

      if (!phone) {
        $("#inputPhone").addClass("has-warning");
        error = true;
      } else {
        $("#inputPhone").removeClass("has-warning");
      }

      if (error) return false;

      var html = "<html>";
      html += "<p>";
      html += "Name: " + name;
      html += "</p>";
      html += "<p>";
      html += "Email: " + email;
      html += "</p>";
      html += "<p>";
      html += "Phone: " + phone;
      html += "</p>";
      html += "<p>";
      html += "Company: " + company;
      html += "</p>";
      html += "<p>";
      html += "Question: " + question;
      html += "</p>";
      html += "</html>";

      var email = {
        to      : to,
        subject : subject,
        html    : html
      }

      $.post(sendgridjs_url, email, function(response) {
        if (response.success) {
          $("#salesModal").modal('hide');

          $("#emailConfModal").modal('show');
          setTimeout(function() {
            $("#emailConfModal").modal('hide');
          }, 1500);
        } else {
          alert(response.error.message);
        }
        $("#sendInfo").html("Send")
        $("#sendInfo").removeAttr("disabled");

      });

      _gaq.push(["_trackEvent", "Email Conversion", conversionSource]);

  });
