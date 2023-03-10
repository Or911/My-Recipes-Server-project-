const axios = require("axios");
class APIManagement {
  constructor() {
    this.recipes = [];
  }

  SortdRecipes(recipes) {
    let recipesdFilter = recipes.map((recipe) => {
      recipe = {
        idMeal: recipe.idMeal,
        title: recipe.title,
        thumbnail: recipe.thumbnail,
        video: recipe.href,
        ingredients: recipe.ingredients,
      };
      return recipe;
    });
    this.recipes = recipesdFilter;
    return this.recipes;
  }

  getRecipes(ingredient) {
    return axios
      .get(
        `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}`
      )
      .then((resp) => {
        const newRecipes = resp.data.results;
        return this.SortdRecipes(newRecipes);
      });
  }
}

const APImanagement = new APIManagement();

module.exports = APImanagement;
