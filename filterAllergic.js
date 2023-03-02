const mokData = require("./list-Ingredients-Allergic.json");


class AllergicFilter {
  constructor() {
    this.dairyIngredients = mokData.dairyIngredients;
    this.glutenIngredients = mokData.glutenIngredients;
  }

  dairyIsExesist(recipe) {
    for (let ingredient of recipe.ingredients) {
      for (let sensitive of this.dairyIngredients) {
        if (ingredient === sensitive) {
          return true;
        }
      }
    }
  }

  glutenIsExesist(recipe) {
    for (let ingredient of recipe.ingredients) {
      for (let sensitive of this.glutenIngredients) {
        if (ingredient === sensitive) {
          return true;
        }
      }
    }
  }

  filterRecipesByIngredients(recipes, dairy, gluten) {
    let newRecipes = recipes.filter((recipe) => {
      if (dairy) {
        return !this.dairyIsExesist(recipe);
      }
      if (gluten) {
        return !this.glutenIsExesist(recipe);
      }
      return recipes;
    });
    return newRecipes;
  }
}

const allergicFilter = new AllergicFilter();

module.exports = allergicFilter;
