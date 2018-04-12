$(document).ready(function() {

    var cmsForm = $("#cms")
    // Adding an event listener for when the form is submitted
    $(cmsForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();

        var freelancerName = $("#name").val().trim();
        var freelancerEmail = $("#email").val().trim();
        var category = $("#job-category").val();
        var portfolio = $("#portfolio").val().trim();
        var linkedin = $("#linkedin").val().trim();
        var rate = $("#rate").val().trim();
        var image = $("#profile-image").val().trim();
        var bio = $("#bio").val().trim();
        var id;
        var idNumber;

        $.ajax({
          method: "GET",
          url: "/userid"
        }).then(function(data){
          console.log(data)
          id = data;
          idNumber = id.UserId;
          console.log("userid: " + idNumber);
          console.log(typeof idNumber)

          var newFreelancerPost = {
            freelancer_name: freelancerName,
            skill_set: category,
            email: freelancerEmail,
            img_link: image,
            bio: bio,
            portfolio: portfolio,
            linked_in: linkedin,
            rate_requested: rate,
            UserId: idNumber
          };

          $.ajax({
            method: "POST",
            url: "/api/freelancers",
            data: newFreelancerPost
          })
          
        });
     
      // Wont submit the post if we are missing a body or a title
      // if (!freelancerName.val().trim() || !category.val().trim() || !portfolio.val().trim() || !linkedin.val().trim() || !rate.val().trim() || !image.val().trim()) {
      //   return;
      // }
      // Constructing a newJobPost object to hand to the database
      
  
    });

})