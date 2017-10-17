const libreria = superagent;
var countriesContainer = document.querySelector('.countries-container')

libreria
  .get('https://restcountries.eu/rest/v2/all')

  .then(function (data) {
    const object = data.body;

    object.forEach(function(element) {
    console.log(element.capital);
    // console.log(element.flag);
    countriesContainer.innerHTML += `
      <div class="country-card">
        <img class="country-flag" src=${element.flag} alt="flag">
        <h4 class="country-name">${element.name}</h4>
        <p class="country-capital">${element.capital}</p>
      </div>
    `
  });



  })
