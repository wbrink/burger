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
    
    
    const devouredBurgers = []
    const nonDevouredBurgers = [];

    results.forEach(elem => {
      if (elem.devoured) {
        devouredBurgers.push(elem);
      } else {
        nonDevouredBurgers.push(elem);
      }
    });

    if (nonDevouredBurgers.length <= 0) {
      res.render("index", {devoured: devouredBurgers, notEaten: nonDevouredBurgers, msg: "Please add a burger"});
      return;
    }

    res.render("index", {devoured: devouredBurgers, notEaten: nonDevouredBurgers});
  });
})


// put route
router.put("/api/devour/:id", (req, res) => {
  burger.update({devoured: req.body.devoured}, 
    {id: parseInt(req.params.id)}, (results) => {
    if (results === "error") {
      return res.status(500).end();
    }
    
    res.json(results);
    // res.render("index", {burgers: results});
  });
})


router.post("/api/create", (req, res) => {
  burger.insert({
    burger_name: req.body.burger_name, 
    // devoured is false by default
  }, (results) => {
    if (results === "error") {
      return res.status(500).end();
    }
    res.json(results);
  });
})


module.exports = router;