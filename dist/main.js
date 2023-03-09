const APImanager = new APIManager();
const render = new Render();
let statusPage = 1;
let inputIngredient = "";

const callAPI = function (inputIngredient) {
  let queryFilter = addQuery(statusPage);
  APImanager.getRecipes(inputIngredient, queryFilter).then((data) => {
    render.RecipesRender(data);
    render.paginationBar(data);
  });
};

$("#searchbutton").on("click", function () {
  inputIngredient = $("#ingredient-input").val();
  numPage = 1;
  callAPI(inputIngredient);
  $("#ingredient-input").val("");
});

$("#pagination-container").on("click", ".pagination-button", function () {
  changepageOfPagination($(this).attr("id"));
  callAPI(inputIngredient);
});

$("#pagination-container").on("click", ".pagination-numbers", function () {
  changePageOfPaginationByNum($(this).attr("id"));
  callAPI(inputIngredient);
});

$(".Recipes-container").on("click", "img", function () {
  let idMealOfCard = $(this).parent().data("id-meal");
  let recipes = APImanager.data.recipes
  let recipeById = recipes.find((recipe) => recipe.idMeal == idMealOfCard);
  alert(recipeById.ingredients[0]);
});

$("#windowErorr").on("click", "button", function () {
  $("#windowErorr").css("display", "none");
});

$(".checkbox").on("click" , function(){
  callAPI(inputIngredient)
  console.log( $(this).attr("id"))
})
