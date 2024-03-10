function CountryItem({ country, onShowCountry, setCountryName }) {
  const { name, population, capital, flag, region } = country;

  function handleClick() {
    onShowCountry((s) => !s);
    setCountryName(name);
  }

  return (
    <div
      className="shadow-md rounded-lg cursor-pointer dark:bg-DarkBlue"
      onClick={handleClick}
    >
      <img
        src={flag}
        alt="flag"
        className="object-cover h-40 w-80 rounded-t-lg"
      />
      <div className="p-5 flex flex-col gap-0.5">
        <p className="font-extrabold mb-3">{name}</p>
        <p>
          <span className="font-bold">Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span className="font-bold">Region: </span>
          {region}
        </p>
        <p>
          <span className="font-bold">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default CountryItem;
