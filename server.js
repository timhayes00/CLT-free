var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

//passport auth dependencies for local-strategy
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

//required dependencies for passport
//app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//initializing local strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});
  
passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});


// Handlebars if we end up needing it.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/freelancer-api-routes.js")(app);
require("./routes/jobs-api-routes.js")(app);
require("./routes/profile-api-routes.js")(app);
require("./routes/html.js")(app);

var db = require("./models");

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App now listening at localhost:" + PORT);
    });
})