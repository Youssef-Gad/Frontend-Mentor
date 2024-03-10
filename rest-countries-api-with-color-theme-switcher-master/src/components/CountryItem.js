function CountryItem({ country, onShowCountry, setCountryId }) {
  const { id, name, population, capital, flag, region } = country;

  function handleClick() {
    onShowCountry((s) => !s);
    setCountryId(id);
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
