var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

    db.Products.findAll({}).then(function(dbProducts) {
      res.render("index", {
        msg: "Welcome!",
        products: dbProducts
      });
    });
  });

  // Load example page and pass in an example by id

  app.get("/product/:id", function(req, res) {
    db.Product.findOne({ where: { id: req.params.id } }).then(function(dbProduct) {
      res.render("product", {
        product: dbProduct


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

