import { useState } from "react";
import CountriesContainer from "./CountriesContainer";
import SearchArea from "./SearchArea";
import Country from "./Country";

function Main({ data, setRegion, countrySearch, setCountrySearch, search }) {
  const [showCountry, setShowCountry] = useState(false);
  const [countryName, setCountryName] = useState(null);

  return (
    <main className="mt-12 pb-10 px-12">
      {showCountry ? (
        <Country
          data={data}
          countryName={countryName}
          onShowCountry={setShowCountry}
        />
      ) : (
        <>
          <SearchArea
            setRegion={setRegion}
            countrySearch={countrySearch}
            setCountrySearch={setCountrySearch}
            search={search}
          />
          <CountriesContainer
            data={data}
            onShowCountry={setShowCountry}
            setCountryName={setCountryName}
          />
        </>
      )}
    </main>
  );
}

export default Main;
