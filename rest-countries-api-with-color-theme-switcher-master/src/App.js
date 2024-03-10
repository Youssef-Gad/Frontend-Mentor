import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  let [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [region, setRegion] = useState("");
  const [countrySearch, setCountrySearch] = useState("");

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          "https://country-api-emk6.onrender.com/countires"
        );
        const data = await res.json();
        setData(data);
      }
      fetchData();
    },
    [setData]
  );

  useEffect(
    function () {
      if (darkMode) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    },
    [darkMode]
  );

  if (countrySearch)
    data = data.filter((country) =>
      country.name.toLowerCase().includes(countrySearch)
    );

  if (region) data = data.filter((country) => country.region === region);

  return (
    <div className="dark:bg-VeryDarkBlueDarkMode dark:text-white">
      <Navbar onDarkMode={setDarkMode} />
      <Main
        data={data}
        setRegion={setRegion}
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
      />
    </div>
  );
}

export default App;
