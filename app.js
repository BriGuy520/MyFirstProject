var express          = require("express"),
    methodOverride   = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose");
      

// requiring the routes 
var blogRoutes = require("./routes/blogs"),
    commentRoutes = require("./routes/comments"),
    indexRoutes = require("./routes/index");

mongoose.connect("mongodb://localhost/personal_site");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

app.use(indexRoutes);
app.use("/blogs", blogRoutes);

app.listen(3000, function(){
  console.log("The server is running properly...");
});
