var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Random AAA Game",
        examples: dbExamples,
        name: "Overwatch",
        price: "$59.99",
        platform: "PC"
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("/testing", function(req, res) {
    res.render("test");
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};

