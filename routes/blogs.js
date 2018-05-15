const express   = require("express");
const router    = express.Router();
const Blog      = require("../models/blog");


// INDEX - Show all blogs
router.get("/", function(req, res){
  Blog.find({}, function(err, allBlogs){
    if(err){
      console.log(err);
    } else {
      res.render("blogs/index", {blogs: allBlogs});
    }
  });
});

// CREATE - add new blog to DB
router.post("/",  function(req, res){
  // get data from the form and add to blogs array
  var title = req.body.title;
  var image = req.body.image;
  var mainContent = req.body.mainContent;


  var newBlog = {title: title, image: image, mainContent: mainContent}
  Blog.create(newBlog, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      console.log(newlyCreated);
      res.redirect("/blogs");
    }
  });
});

// show form to create new blog
router.get("/new", function(req, res){
  res.render("blogs/new");
});

router.get("/:id", function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      console.log(err);
    } else {
      // render show template with that blog
      res.render("blogs/show", {blog: foundBlog});
    }
  });
});


// EDIT Blog Post
router.get("/:id/edit", function(req, res){
  Blog.findById(req.params.id, function(err, editBlog){
    res.render("blogs/edit", {blog: editBlog});
  });
});

// UPDATE Blog Route
router.put("/:id", function(req, res){
  // find the correct blog and update it
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
    if(err){
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

// Destroy a blog
router.delete("/:id", function(req, res){
  Blog.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs');
    }
  });
});

module.exports = router;


