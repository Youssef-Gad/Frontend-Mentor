import {
  faArrowUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function SearchArea({ setRegion, countrySearch, setCountrySearch }) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center flex-col gap-5 justify-between md:flex-row">
      <div className="flex items-center relative">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3" />
        <input
          className="px-10 py-3 w-[18rem] placeholder:italic placeholder:text-DarkGray placeholder:font-bold bg-white rounded-md focus:outline-none sm:w-[20rem] md:w-[23rem] dark:bg-DarkBlue dark:placeholder:text-stone-300"
          placeholder={`Search for a country...`}
          type="text"
          value={countrySearch}
          onChange={(e) => setCountrySearch(e.target.value)}
        />
      </div>

      <div className="text-left">
        <div className="relative">
          <button
            onClick={() => setShow((s) => !s)}
            className="font-bold px-9 py-3 bg-white rounded-md focus:outline-none flex items-center gap-3 dark:bg-DarkBlue dark:text-stone-200"
          >
            Filter by Region
            <FontAwesomeIcon
              icon={faArrowUp}
              className={
                show
                  ? "rotate transition-all duration-300"
                  : "rotate-180 transition-all duration-300"
              }
            />
          </button>
        </div>
        {show && (
          <div className="p-3 absolute flex flex-col bg-white top-[275px] w-[212px] items-left z-30 shadow-md rounded-md gap-3 md:top-[170px] dark:bg-DarkBlue dark:text-stone-200 font-bold">
            <span
              className="cursor-pointer w-fit"
              onClick={() => setRegion("Africa")}
            >
              Africa
            </span>
            <span
              className="cursor-pointer w-fit"
              onClick={() => setRegion("Americas")}
            >
              America
            </span>
            <span
              className="cursor-pointer w-fit"
              onClick={() => setRegion("Asia")}
            >
              Asia
            </span>
            <span
              className="cursor-pointer w-fit"
              onClick={() => setRegion("Europe")}
            >
              Europe
            </span>
            <span
              className="cursor-pointer w-fit"
              onClick={() => setRegion("Oceania")}
            >
              Oceania
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchArea;
