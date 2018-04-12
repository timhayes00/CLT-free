var path = require("path");
// Requiring our models
var db = require("../models");
var passport = require("../config/passport");


//Routes for profile dashboard

module.exports = function(app) {
    //Route for profile freelancer posts
    // Route for getting some data about our user to be used client side
    app.get("/api/profile/freelancers", function(req, res) {
        if (!req.user) {
          // The user is not logged in, send back an empty object
          res.json({});
        }
        else {
          // Otherwise send back the user's email and id
          // Sending back a password, even a hashed password, isn't a good idea
          var id = req.user.id
          console.log("id: " + id)
          db.Freelancer.findAll({
            where: {
                UserId: id
            }
        }).then(function(result) {
                res.json(result);
              });
        };
    })

    app.get("/api/profile/jobs", function(req, res) {
        if (!req.user) {
          // The user is not logged in, send back an empty object
          res.json({});
        }
        else {
          // Otherwise send back the user's email and id
          // Sending back a password, even a hashed password, isn't a good idea
          var id = req.user.id
          console.log("id: " + id)
          db.Job.findAll({
            where: {
                UserId: id
            }
        }).then(function(result) {
                res.json(result);
              });
        };
    })



};
