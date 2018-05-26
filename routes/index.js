var express = require("express");
var router = express.Router();
var Blog = require("../models/blog");


// root route 
router.get("/", function(req, res){
  res.render("landing");
});

// Show register form 
router.get("/register", function(req, res){
  res.render("register");
});

// Handle Sign Up Logic
router.post("/register", function(res, req){
  var newUser = new User({username: req.body.username})
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      req.flash("error", err.message);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      req.flash("success", "Welcome " + user.username + "! Write a comment on my Blog!")
    });
  });
});

// home page
router.get("/home", function(req, res){
  Blog.find({}, function(err, allBlogs){
    if(err){
      console.log(err);
    } else {
      res.render("home", {blogs: allBlogs});
    }
  });
});

// Show Registration form
router.get("/register", function(req, res){
  res.render("register");
});

//

module.exports = router;