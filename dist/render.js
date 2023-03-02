class Render {
  constructor() {
    this.source = $("#Recipes-template").html()
    this.template = Handlebars.compile(this.source);
    this.RecipesContainer = $(".Recipes-container")
  }
  RecipesRender(Recipes) {
    this.RecipesContainer.empty();
    let newHtml = this.template({ cards: Recipes });
    this.RecipesContainer.append(newHtml);
  }
}
