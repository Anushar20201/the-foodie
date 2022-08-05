const seedUsers = require("./user-seeds");
const seedRecipes = require("./recipe-seeds");
// const seedComments = require('./comment-seeds');
// const seedVotes = require('./vote-seeds');

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedRecipes();
  console.log("\n----- RECIPES SEEDED -----\n");

  process.exit(0);
};

seedAll();
