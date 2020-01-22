require("dotenv").config();
require("./config/database.config");
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let property = require("./lib/api/components/property/routes");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/api", property);
app.get("/", (req, res) => res.send("RealtorJS says hello to you =)"));

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("RealtorJS running on port " + port);
});
