import CountryItem from "./CountryItem";

function CountriesContainer({ data, onShowCountry, setCountryName }) {
  return (
    <main className="mt-10">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 md:grid-cols-4">
        {data.map((country) => (
          <CountryItem
            country={country}
            key={country.name}
            onShowCountry={onShowCountry}
            setCountryName={setCountryName}
          />
        ))}
      </div>
    </main>
  );
}

export default CountriesContainer;
