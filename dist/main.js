const APImanager = new APIManager();
const render = new Render();

$("#searchbutton").on("click", function () {
  let input = $("#ingredient-input").val();
  let queryFilter = checkSensitivities();
  APImanager.getRecipes(input, queryFilter).then((data) => {
    render.RecipesRender(data);
    $("#ingredient-input").val("");
  });
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
