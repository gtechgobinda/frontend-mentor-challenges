import React from "react";
import CountryCard from "./CountryCard";
import countriesData from "../../countriesData";

const CountriesList = () => {
  const array = countriesData.map((country) => {
    // console.log(country.name.common);
    return (
      <CountryCard
        key={country.name.common}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population.toLocaleString("en-IN")}
        region={country.region}
        capital={country.capital?.[0]}
      />
    );
  });
  return (
    <>
      <div className="countries-container">{array}</div>
    </>
  );
};

export default CountriesList;
