const Sequelize = require("sequelize");

const db = new Sequelize('shopdb', 'shopper', 'shoppass', {
    host: "localhost",
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
    }
});
// User is baically is a class or table name?
const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    passwd:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Product = db.define('product', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
    }
})

// make sure the database is synced
db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => ("Error creating database"))
exports = module.exports = {
    User, Product
}