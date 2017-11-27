let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

let app = express();

let PORT = process.env.PORT || 8080;

let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("listening on " + PORT)
});
