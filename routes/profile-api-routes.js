var path = require("path");
// Requiring our models
var db = require("../models");


//Routes for profile dashboard

module.exports = function(app) {
    //Route for profile freelancer posts
    app.get("/api/freelancer", function(req, res) {
        db.placeholer.findAll(function(data) {
        res.json(data);
        });
    });

    //Route for profile job posts
    app.get("/api/jobs", function(req, res) {
        db.placeholer.findAll(function(data) {
        res.json(data);
        });
    });
}