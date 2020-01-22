"use strict";
let router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!"
  });
});

var property = require("./controller");

router
  .route("/properties")
  .get(property.list)
  .post(property.create);
router
  .route("/properties/:id")
  .get(property.read)
  .put(property.update)
  .delete(property.delete);

module.exports = router;
