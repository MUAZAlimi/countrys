const url  = 'https://restcountries.com/v3.1/name/'
const searchBtn = document.querySelector("#searchBtn")
const countryImg = document.querySelector("countryImg")
const countryPart = document.querySelector('country-part')
const result = document.querySelector('.result')

searchBtn.addEventListener('click', () => {
    let countryName = document.querySelector('.countryName').value
    // console.log(countryName);
    fetch(`${url} ${countryName}`)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        // console.log(data[0].currencies);
        let currency = Object.keys(data[0].currencies)
        // console.log(currency[0]);
        let Language = Object.keys(data[0].languages)
        // console.log(Language[0]);
        result.innerHTML = `
        <div class="countryImg">
        <img src="${data[0].flags.svg}" alt="">
        <h1>${countryName}</h1>
      </div>
      <div class="country-part">
        <p><strong>Capital:</strong>   ${data[0].capital[0]}</p>
        <p><strong>Continent:</strong> ${data[0].region}</p>
        <p><strong>Population:</strong> ${data[0].population}</p>
        <p><strong>Currencies:</strong> ${currency[0]}</p>
        <p><strong>Language:</strong> ${Language[0]}</p>
      </div>
        `
        
    })
    .catch(() => {
        result.innerHTML = `
        <h2 class="error">There is not a country called  ${countryName}</h2>
        `
    })
})