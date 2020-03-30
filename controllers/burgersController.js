const express = require("express");
const burger = require("../models/burger");

const router = express.Router();


// route to get all the burgers
router.get("/", (req, res) => {
  burger.selectAll((results) => {
    // don't want the server to cease working
    if (results === "error") {
      return res.status(500).end();
    }
    console.log(results);
    res.render("index", {burgers: results});
  });
})


module.exports = router;