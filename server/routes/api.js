const express = require("express");
const router = express.Router();
const APImanagement = require("../Services/APImanagement.JS");
const allergicFilter = require("../Services/filterAllergic");
const SortedPage = require("../Services/pagesSorted");

router.get("/recipes", function (req, res) {
  res.status(404).send({ error: "Please provide an ingredient" });
});

router.get("/recipes/:ingredient", function (req, res) {
  let ingredient = req.params.ingredient;
  let numPage = req.query.pageNumber - 1;
  let pageSize = req.query.pageSize;
  let dairy = req.query.dairy;
  let gluten = req.query.gluten;
  APImanagement.getRecipes(ingredient).then((recipes) => {
    let RecipesFiltered = allergicFilter.filterRecipesByIngredients(recipes, dairy, gluten);
    let recipesPage = SortedPage(RecipesFiltered, pageSize);
    let pages = recipesPage.length
    if (recipesPage[numPage]) {
      let send = {recipes: recipesPage[numPage] , pages}
      res.send(send);
    }
  });
});
module.exports = router;
