class Render {
  constructor() {
    this.source = $("#Recipes-template").html();
    this.template = Handlebars.compile(this.source);
    this.RecipesContainer = $(".Recipes-container");
  }
  RecipesRender(data) {
    this.RecipesContainer.empty();
    let newHtml = this.template({ cards: data });
    this.RecipesContainer.append(newHtml);
  }
  paginationBar(data) {
    $("#pagination-container").empty();
    if (!data){
      return
    }
    $("#pagination-container").append(
      `<button class="pagination-button" id="Previous">< Previous page</button>`
    );
    let buttonNum = data.pages;
    for (let i = 1; i <= buttonNum; i++) {
      $("#pagination-container").append(
        `<button class="pagination-numbers" id="${i}">${i}</button>`
      );
    }
    $("#pagination-container").append(
      `<button class="pagination-button" id="next">Next page ></button>`
    );
  }
}
