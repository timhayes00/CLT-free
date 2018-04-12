var path = require("path");
var db = require("../models");
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function(app) {

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.json("/");
      });
    
      // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
      // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
      // otherwise send back an error
      app.post("/api/sign-up", function(req, res) {
        console.log(req.body);
        db.User.create({
          username: req.body.username,
          password: req.body.password
        }).then(function() {
          res.redirect(307, "/api/login");
        }).catch(function(err) {
          console.log(err);
          res.json(err);
          // res.status(422).json(err.errors[0].message);
        });
      });
    
      // Route for logging user out
      app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
      });

      //route for sending current userid to client
      app.get("/userid", function(req, res){
        var userid = {UserId: req.user.id}
        console.log ("server side: " + userid)
        
        res.json(userid)
      });

      //route for passing user auth check to client
      app.get("/logincheck", function(req, res){
        if (!req.user){
          var loggedin = {loggedIn:false}
        }
        else {
          var loggedin = {loggedIn:true}
        }

        res.json(loggedin)
      })

}