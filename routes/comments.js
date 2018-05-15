var express = require('express'),
    router  = express.Router({mergeParams: true}),
    Blog    = require("../models/blog"),
    Comment = require("../models/comment");


router.get("/new", function(req, res){
  // find blog from ID
  Blog.findById(req.params.id, function(err, blog){
    if(err){
      console.log(err);
    } else {
      res.render("blogs/new", {blog: blog});
    }
  });
});

router.post("/", function(req, res){
  // Lookup campground using ID
  Blog.findById(req.params.id, function(err, blog){
    if(err){
      console.log(err);
      res.redirect("/blogs");
    } else {
        res.render("comments/new", {blog: blog}); 
    }
  });
});