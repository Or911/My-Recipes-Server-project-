const SortedPage = function (RecipesFiltered, pageSize) {
  let recipeSortedPage = [];
  let onePage = [];
  let RecipesLength = RecipesFiltered.length - 1;
  let i = 0;
  for (let len = RecipesLength; len >= 0; len--) {
    onePage.push(RecipesFiltered[i++]);
    if (onePage.length == pageSize || len == 0) {
      recipeSortedPage.push(onePage);
      onePage = [];
    }
  }
  onePage = [];
  i = 0;
  return recipeSortedPage;
};

module.exports = SortedPage;
