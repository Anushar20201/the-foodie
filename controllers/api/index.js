const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const recipeRoutes = require("./recipe-routes.js");

//routing here
router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;
