const express = require("express");
const router = express.Router();
const APImanagement = require("../Services/APImanagement.JS");
const allergicFilter = require("../Services/filterAllergic")


router.get("/recipes", function (req, res) {
  res.status(404).send({ error: "Please provide an ingredient" });
});

router.get("/recipes/:ingredient", function (req, res) {
  let ingredient = req.params.ingredient;
  let dairy = req.query.dairy;
  let gluten = req.query.gluten;
  APImanagement.getRecipes(ingredient).then((recipes) => {
      let RecipesFiltered = allergicFilter.filterRecipesByIngredients(recipes, dairy, gluten);
      res.send(RecipesFiltered);
    });
})
module.exports = router;
