var express = require("express");
var router = express.Router();


// root route 
router.get("/", function(req, res){
  res.render("landing");
});

// Show Registration form
router.get("/register", function(req, res){
  res.render("register");
});

//

module.exports = router;