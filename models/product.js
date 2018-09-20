
module.exports = function(sequelize, DataTypes) {
  // Product is a variable and "product" is the table name, lowercase "sequelinze" is connection to table
  // defining as part of property
  var Product = sequelize.define("Product", {
    
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    platform: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT

  });
  return Product;
};