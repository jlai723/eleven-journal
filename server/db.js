const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:718d2915e10f4cb5b85c9393b2d58259@localhost:5432/eleven-journal");

module.exports = sequelize;