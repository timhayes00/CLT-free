var path = require("path");
// Requiring our models
var db = require("../models");

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

    //route to display user dashboard
    app.get("/profiles/:id", function(req, res) {
        res.render("placeholder.handlebars", handlebarsobj);
    });

}