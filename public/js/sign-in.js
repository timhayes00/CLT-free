$(document).ready(function() {

    var signInForm = $("#sign-in-form")
    // Adding an event listener for when the form is submitted
    $(signInForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();

        var email = $("sign-in-email").val();
        var password = $("sign-in-password").val();
        //code for grabbing user id of logged in user
     
      // Constructing a newJobPost object to hand to the database
      var newSignIn = {
        email: email,
        password: password
      };
  
      console.log(newSignIn);

      //ajax post to send new job to database
      $.ajax({
        method: "POST",
        url: "/api/login",
        data: newSignIn
      }).then(function(data) {
        window.location.replace(data);
  
      });

  })
})