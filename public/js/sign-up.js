$(document).ready(function() {

    var signUpForm = $("#sign-up-form")
    // Adding an event listener for when the form is submitted
    $(signUpForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();

        var email = $("sign-up-email").val();
        var password = $("sign-up-password").val();
        //code for grabbing user id of logged in user
     
      // Constructing a newJobPost object to hand to the database
      var newSignUp = {
        email: email,
        password: password
      };
  
      console.log(newSignUp);

      //ajax post to send new job to database
      $.ajax({
        method: "POST",
        url: "/api/sign-up",
        data: newSignUp
      }).then(function(data) {
        window.location.replace(data);
  
    });
  })
})