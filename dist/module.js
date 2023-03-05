let pageSize = 4;
let numPage = 1;

const checkNumOfRecipes = function (page) {
  if (page === "next") {
    numPage++;
  }
  if (page === "Previous") {
    numPage--;
  }
  return `?pageNumber=${numPage}&pageSize=${pageSize}`;
};

const checkGlutenFilter = function () {
  let glutenCheck = $("#glutenFilter").is(":checked");
  if (glutenCheck) {
    return `gluten=${glutenCheck}`;
  }
  return "";
};

const checkDairyFilter = function (queryFilter) {
  let dairyCheck = $("#dairyFilter").is(":checked");
  if (dairyCheck) {
    if (queryFilter) {
      return `&dairy=${dairyCheck}`;
    } else return `?dairy=${dairyCheck}`;
  }
  return "";
};

const addQuery = function () {
  let Filter = ``;
  Filter += checkNumOfRecipes();
  Filter += checkGlutenFilter();
  Filter += checkDairyFilter(Filter);
  return Filter;
};
