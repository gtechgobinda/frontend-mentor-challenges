const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const searchInput = document.querySelector(".search-container input");

let allCountriesData;
// fetch data
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data);
    allCountriesData = data;
  });

//filter by region
filterByRegion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then(renderCountries);
});

function renderCountries(data) {
  countriesContainer.innerHTML = "";
  data.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/country.html?name=${country.name.common}`;
    countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common}">
            <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital?.[0]}</p>
            </div>
`;
    countriesContainer.append(countryCard);
  });
}

searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  const filteredCountries=allCountriesData.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
  // console.log(filteredCountries);
  renderCountries(filteredCountries);
});

// const countryCard = document.createElement('a');
// countryCard.classList.add("country-card")

// const cardHTML = `
// <img src="https://flagcdn.com/is.svg" alt="flag">
// <div class="card-text">
// <h3 class="card-title">Iceland</h3>
//     <p><b>Population: </b>334330</p>
//     <p><b>Region: </b>Europe</p>
//     <p><b>Capital: </b>Reykjavk</p>
//     </div>
// `
// countryCard.innerHTML = cardHTML;

// // console.log(cardImg)
// // const cardImg=document.createElement('img');
// // cardImg.src="https://flagcdn.com/cx.svg";
// // countryCard.append(cardImg)

// countriesContainer.append(countryCard)
