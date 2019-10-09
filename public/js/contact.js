var contactForm = $("form#contact-form");
contactForm.submit(function(event){
	event.preventDefault();

	var params = {
        "from_name": $("#name").val(),
        "message": $("#comments").val(),
        "from_email": $("#email").val(),
        "mobile": $("#mobile").val()
    };

  var service_id = "default_service";

  var template_id = "colour-chem";
  contactForm.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params)
  	.then(function(){ 
       $("#success-alert").show().addClass("show fade");
       contactForm.find("button").text("Send");
     }, function(err) {
        $("#error-alert").show().addClass("show fade");
       contactForm.find("button").text("Send");
    });

  return false;
});
