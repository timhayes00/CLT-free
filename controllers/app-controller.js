var express = require("express")

var path = require("path");

var db = require("../models");

var router = express.Router();

//API routes

router.get("/", function(req, res) {
    db.#####.all(function(data) {
     
      res.json(data);
    });
});

router.get("/", function(req, res) {
    db.#####.all(function(data) {
     
      res.json(data);
    });
});

//HTML routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

app.get("/freelancers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/freelancers.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/work.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile-cms.html"));
});

