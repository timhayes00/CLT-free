$.ajax({
    method: "GET",
    url: "/logincheck"
  }).then(function(data){
  
  if( data.loggedIn === true ){
    $("#logout").css("display","inline")
    $("#login").css("display", "none")
  }

})