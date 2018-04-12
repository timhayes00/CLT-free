$(document).ready(function() {

    var cmsForm = $("#cms")
    // Adding an event listener for when the form is submitted
    $(cmsForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();
        var jobPoster = $("#job-poster-name").val().trim();
        var jobEmail = $("#email").val().trim();
        var jobName = $("#job-name").val().trim();
        var jobCategory = $("#job-category").val();
        var jobDescription = $("#job-description").val().trim();
        var id;
        var idNumber;
        
        $.ajax({
          method: "GET",
          url: "/userid"
        }).then(function(data){
          console.log("cms page: " + data);
          id = data;
          idNumber = id.UserId;
          console.log("userid: " + idNumber)
          console.log(typeof idNumber)

          var newJobPost = {
            creator: jobPoster,
            email: jobEmail,
            job_name: jobName,
            job_description: jobDescription,
            job_category: jobCategory,
            UserId: idNumber
          };

          $.ajax({
            method: "POST",
            url: "/api/jobs",
            data: newJobPost
          })
        });
     
      // Wont submit the post if we are missing a body or a title
      // if (!jobPoster.val().trim() || !jobName.val().trim() || !jobDescription.val().trim() ) {
      //   return;
      // }
      
  
    });

})