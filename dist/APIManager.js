class APIManager {
  constructor() {
    this.data = [];
  }

  getData() {
    return this.data;
  }

  getRecipes(input, queryFilter) {
    return $.ajax({
      method: "GET",
      url: `/recipes/${input}${queryFilter}`,
    })
      .then((data) => {
        this.data = data;
        return this.data;
      })
      .catch((error) => {
        $("#windowErorr").children("h1").text(`Error: ${error.status}`);
        $("#windowErorr").children("h3").text(error.responseJSON.error);
        $("#windowErorr").css("display", "block");
      });
  }
}
