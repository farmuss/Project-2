var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    var posterURL = "https://mvpo.us/img/P5237.jpg"
    db.Product.findAll({}).then(function (dbProduct) {
      res.render("index", {
<<<<<<< HEAD
        msg: "Welcome!",
        products: dbProducts
=======
        poster: posterURL,
        releaseYear: 2016,
        genre: "FPS",
        publisher: "Blizzard",
        rating: "9/10",
        price: "$59.99",
        platform: "PC",
        name: "Overwatch",
        osMin: "Windows Vista/7/ 8/10 64-bit (latest Service Pack)",
        osRec: "Windows Vista/7/ 8/10 64-bit (latest Service Pack)",
        processorMin: "Intel Core i3 or AMD Phenom X3 865",
        processorRec: "Intel Core i5 or AMD Phenom II X3, 2.8 GHz",
        videoMin: "Nvidia GeForce GTX 460, ATI Radeon HD 4850, or Intel HD Graphics 4400",
        videoRec: "Nvidia GeForce GTX 660 or ATI Radeon HD 7950",
        memoryMin: "768 MB VRAM, 4 GB System RAM",
        memoryRec: "2 GB VRAM, 6 GB System RAM",
        storageMin: posterURL,
        storageRec: "7200 RPM with 5 GB available HD space",
>>>>>>> 9ce6527285089853cb88c752d78ee5949405f584
      });
    });
  });
  

  // profile orders
  app.get("/profile/orders", function (req, res) {
    res.render("orders");
  });

  // profile wishlist
  app.get("/profile/wishlist", function (req, res) {
    res.render("wishlist");
  });

  // PC Games
  app.get("/fullcatalogue/pc", function (req, res) {
    res.render("pc");
  });

  // Playstation Games
    app.get("/fullcatalogue/playstation", function (req, res) {
      res.render("playstation");
  });

    // XBOX Games
    app.get("/fullcatalogue/xbox", function (req, res) {
      res.render("xbox");
  });

  // new releases page
  app.get("/newreleases", function (req, res) {
      res.render("newReleases");
  });
  // Load example page and pass in an example by id

  app.get("/product/:id", function(req, res) {
    db.Product.findOne({ where: { id: req.params.id } }).then(function(dbProduct) {
      res.render("product", {
        product: dbProduct


      });
    });
  });

  // testing page
  app.get("/testing", function(req, res) {
    res.render("test");
  });

  // cart page
  app.get("/cart", function(req, res) {
    res.render("cart");
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

}
