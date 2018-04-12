//logout javascript
$(document).on("click", "#logout", function(){
    $.ajax({
        method: "GET",
        url: "/logout"
      }).then(location.reload())
})