import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ onDarkMode }) {
  return (
    <nav className="flex items-center justify-between px-12 py-5 dark:bg-DarkBlue">
      <h1 className="text-sm font-extrabold sm:text-md md:text-xl">
        Where in the world?
      </h1>

      <button
        className="text-xs flex items-center gap-2 sm:text-sm md:text-lg"
        onClick={() => onDarkMode((d) => !d)}
      >
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode
      </button>
    </nav>
  );
}

export default Navbar;
