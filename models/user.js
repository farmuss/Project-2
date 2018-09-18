module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // giving the User model a name of type STRING
    name: DataTypes.STRING,
    passwd: DataTypes.TEXT
  });
  return User;
}