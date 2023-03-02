const mokData = require("./list-Ingredients-Allergic.json");


class AllergicFilter {
  constructor() {
    this.dairyIngredients = mokData.dairyIngredients;
    this.glutenIngredients = mokData.glutenIngredients;
  }

  doesContainDairy(recipe) {
    for (let ingredient of recipe.ingredients) {
      for (let sensitive of this.dairyIngredients) {
        if (ingredient === sensitive) {
          return true;
        }
      }
    }
  }

  doesContainGluten(recipe) {
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
        return !this.doesContainDairy(recipe);
      }
      if (gluten) {
        return !this.doesContainGluten(recipe);
      }
      return recipes;
    });
    return newRecipes;
  }
}

const allergicFilter = new AllergicFilter();

module.exports = allergicFilter;
