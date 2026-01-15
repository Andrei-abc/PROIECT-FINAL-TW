const { Sequelize } = require('sequelize');

// Configure Sequelize pentru SQLite
// Folosim fisier local pentru stocare a datelor
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_PATH || './database.sqlite'
});

// Exportam instanta Sequelize pentru a fi folosita in modele si server
module.exports = sequelize;