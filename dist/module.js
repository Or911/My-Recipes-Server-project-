const checkGlutenFilter = function () {
    let glutenCheck = $("#glutenFilter").is(":checked");
    if (glutenCheck) {
      return `?gluten=${glutenCheck}`;
    }
    return "";
  };
  
  const checkDairyFilter = function (queryFilter) {
    let dairyCheck = $("#dairyFilter").is(":checked");
    if (dairyCheck){
      if (queryFilter) {
        return `&dairy=${dairyCheck}`;
      } else return `?dairy=${dairyCheck}`;
    }
    return "";
  }
  

  const checkSensitivities = function (){
    let Filter = ``;
    Filter += checkGlutenFilter();
    Filter += checkDairyFilter(Filter);
    return Filter
  }