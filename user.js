module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      passwd: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      price: { 
        type: DataType.FLOAT,
        allowNull: false,
        validate:{
            len: [1]
        }
      }
    });
  
    return User;
  };
  