var path = require("path");
// Requiring our models
// var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    //HTML routes

    //route to display homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //route to display freelancers page
    app.get("/freelancers", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/freelancers.html"));
    });

    //route to display jobs page
    app.get("/jobs", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/work.html"));
    });

    //route to display freelance profile submission page
    app.get("/freelancer-submit", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile-cms.html"));
    });

    //route to display job submission page
    app.get("/job-submit", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/work-cms.html"));
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/sign-up", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/create-account.html"));
    });

    //route to display user dashboard, need to incorporate id
    app.get("/profile", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.html"));
      });
    // });

}