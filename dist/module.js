let pageSize = 4;
let numPage = 1;

const queryPageNum = function () {

  return `?pageNumber=${numPage}&pageSize=${pageSize}`;
};

const changepageOfPagination = function (page){
  
  if (page == "next") {
    numPage++;
  }
  if (page == "Previous") {
    numPage--;
  }

}
const changePageOfPaginationByNum = function (page){
  numPage = parseInt(page)
}

const checkGlutenFilter = function () {
  let glutenCheck = $("#glutenFilter").is(":checked");
  if (glutenCheck) {
    return `&gluten=${glutenCheck}`;
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

const addQuery = function (statusPage) {
  let Filter = ``;
  Filter += queryPageNum();
  Filter += checkGlutenFilter();
  Filter += checkDairyFilter(Filter);
  return Filter;
};
