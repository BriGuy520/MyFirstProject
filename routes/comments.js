var express = require('express'),
    router  = express.Router({mergeParams: true}),
    Blog    = require("../models/blog");


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