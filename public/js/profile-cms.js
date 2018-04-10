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
        var bio = $("#bio").val().trim();
        //code for grabbing user id of logged in user
     
      // Wont submit the post if we are missing a body or a title
      if (!freelancerName.val().trim() || !category.val().trim() || !portfolio.val().trim() || !linkedin.val().trim() || !email.val().trim() || !rate.val().trim() || !image.val().trim()) {
        return;
      }
      // Constructing a newJobPost object to hand to the database
      var newFreelancerPost = {
        freelancer_name: freelancerName,
        skill_set: category,
        img_link: image,
        bio: bio,
        portfolio: portfolio,
        linked_in: linkedin,
        rate_requested: rate,
        email: email
      };
  
      console.log(newFreelancerPost);

      //ajax post to send new job to database
      $.ajax({
        method: "POST",
        url: "/api/freelancers",
        data: newFreelancerPost
      })
  
    });

})