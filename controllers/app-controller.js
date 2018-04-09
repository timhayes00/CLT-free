var express = require("express")

var path = require("path");

var db = require("../models");

var router = express.Router();

//API routes

//route to get data for freelancers page all-results
router.get("/api/freelancers", function(req, res) {
    db.placeholder.findAll(function(data) {
      res.json(data);
    });
});

//add in get routes for each category for sort
//add in post routs for tentative messaging system

//route to get data for jobs page
router.get("/api/jobs", function(req, res) {
    db.placeholer.findAll(function(data) {
      res.json(data);
    });
});

//add in get routes for jobs by category for sort
//add in post routs for tentative messaging system

//POST route for freelance submission page
router.post("/api/freelancers", function(req, res) {
    db.placeholer.create({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category
    })
    .then(function(result) {
        res.json(result);
    });
});

//POST route for jobs submission page
router.post("/api/jobs", function(req, res) {
    db.placeholer.create({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category
    })
    .then(function(result) {
        res.json(result);
    });
});

//Routes for profile dashboard

//Route for profile freelancer posts
router.get("/api/jobs", function(req, res) {
    db.placeholer.findAll(function(data) {
      res.json(data);
    });
});

//Route for profile job posts
router.get("/api/jobs", function(req, res) {
    db.placeholer.findAll(function(data) {
      res.json(data);
    });
});

//Route for messages tentative


//HTML routes

//route to display homepage
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

//route to display freelancers page
router.get("/freelancers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/freelancers.html"));
});

//route to display jobs page
router.get("/jobs", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/work.html"));
});

//route to display freelance profile submission page
router.get("/freelancer-submit", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile-cms.html"));
});

//route to display job submission page
router.get("/job-submit", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/work-cms.html"));
});

//route to display user dashboard
router.get("/profiles/:id", function(req, res) {
    res.render("placeholder.handlebars", handlebarsobj);
});

module.exports = router