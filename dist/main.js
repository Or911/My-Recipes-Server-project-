const APImanager = new APIManager();
const render = new Render();

let inputIngredient = "";

const callAPI = function (inputIngredient) {
  let queryFilter = addQuery();
  APImanager.getRecipes(inputIngredient, queryFilter).then((data) => {
    render.RecipesRender(data);
  });
};

$("#searchbutton").on("click", function () {
  inputIngredient = $("#ingredient-input").val();
  numPage = 1;
  callAPI(inputIngredient);
  $("#ingredient-input").val("");
});

$("#pagination-container").on("click", ".pagination-button", function () {
  checkNumOfRecipes($(this).attr("id"));
  callAPI(inputIngredient);
});

$(".Recipes-container").on("click", "img", function () {
  let idMealOfCard = $(this).parent().data("id-meal");
  let recipes = APImanager.data;
  let recipeById = recipes.find((recipe) => recipe.idMeal == idMealOfCard);
  alert(recipeById.ingredients[0]);
});

$("#windowErorr").on("click", "button", function () {
  $("#windowErorr").css("display", "none");
});
