var express = require("express");
var router = express.Router();


// root route 
router.get("/", function(req, res){
  res.render("landing");
});

// home page
router.get("/home", function(req, res){
  res.render("home");
});

// Show Registration form
router.get("/register", function(req, res){
  res.render("register");
});

//

module.exports = router;