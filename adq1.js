const cases = {
    "India": 10,
    'Sri Lanka': 20,
    "England": 16,
    "Dubai": 50,
    "France": 25
  };
   const continents = {
    "India": "Asia",
    "Sri Lanka": "Asia",
    "England": "Europe",
    "Dubai": "Africa",
    "Mexico": "America",
    "France": "Europe"
  }

  const totalCases = (cases,continents) => {
  let output = {};
 
  for(let key in continents){
     
    if(!(continents[key] in output)) {
      output[continents[key]] = 0;
    }
 
    if(key in cases) {
      caseValue = cases[key];
      continent = continents[key];
      if(continent in output) {
        output[continent] += caseValue;
      }
    }
  }
  return output
}

console.log(totalCases(cases,continents))
