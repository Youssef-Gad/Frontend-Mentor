import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Country({ data, countryName, onShowCountry }) {
  const [country, setCountry] = useState({});
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  useEffect(
    function () {
      data.map((country) =>
        country.name === countryName ? setCountry(country) : null
      );
    },
    [countryName, data]
  );

  return (
    <div>
      <button
        className="flex items-center gap-3 px-5 py-2 font-semibold rounded-md  dark:bg-DarkBlue"
        onClick={() => onShowCountry((s) => !s)}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
      <div className="flex flex-col sm:flex-row items-center my-10 gap-10 sm:my-20 sm:gap-20">
        <img src={flag} alt="flag" className="w-[35rem]" />
        <div className="grid grid-cols-[1fr_1fr] gap-y-10 gap-x-8">
          <h2 className="font-extrabold text-2xl">{name}</h2>
          <div className="col-start-1 flex flex-col gap-2">
            <p>
              <span className="font-bold">Native Name: </span>
              {nativeName}
            </p>
            <p>
              <span className="font-bold">Population: </span>
              {population?.toLocaleString()}
            </p>
            <p>
              <span className="font-bold">Region: </span>
              {region}
            </p>
            <p>
              <span className="font-bold">Sub Region: </span>
              {subregion}
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              {capital}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold">Top Level Domain: </span>
              {topLevelDomain?.map((item) => item)}
            </p>
            <p>
              <span className="font-bold">Currencies: </span>
              {currencies?.map((currency) => currency.name)}
            </p>
            <p>
              <span className="font-bold">Languages: </span>
              {languages?.map((lang) => lang.name)}
            </p>
          </div>
          <div>
            <p className="font-bold">
              Border Countries:{" "}
              {!borders?.length
                ? "No Countries"
                : borders?.map((item, i) =>
                    i < 3 ? (
                      <span
                        key={item}
                        className="font-semibold mx-1 px-1 shadow-md dark:bg-DarkBlue"
                      >
                        {item}
                      </span>
                    ) : null
                  )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
