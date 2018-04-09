$(document).ready(function() {

    var cmsForm = $("#cms")
    // Adding an event listener for when the form is submitted
    $(cmsForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();

        var freelancerName = $("#name").val().trim();
        var category = $("#job-category").val();
        var portfolio = $("#portfolio").val().trim();
        var linkedin = $("#linkedin").val().trim();
        var email = $("#email").val().trim();
        var rate = $("#rate").val().trim();
        var image = $("#profile-image").val().trim();
        //code for grabbing user id of logged in user
     
      // Wont submit the post if we are missing a body or a title
      if (!jobName.val().trim() || !jobBudget.val().trim() || !jobEmail.val().trim() || !jobDescription.val().trim() ) {
        return;
      }
      // Constructing a newJobPost object to hand to the database
      var newJobPost = {
        creator:"Placeholder",
        job_name: jobName,
        job_description: jobDescription,
        job_category: jobCategory,
        budget: jobBudget,
        email: jobEmail
      };
  
      console.log(newJobPost);

      //ajax post to send new job to database
      $.ajax({
        method: "POST",
        url: "/api/jobs",
        data: newJobPost
      })
  
    });

})