import { useState } from "react";

export default function App() {
  return (
    <>
      <AgeCalculator />
      <Footer />
    </>
  );
}

function AgeCalculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [resYear, setResYear] = useState("");
  const [resMonth, setResMonth] = useState("");
  const [resDay, setResDay] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      day === "" ||
      month === "" ||
      year === "" ||
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year < 1 ||
      year > new Date().getFullYear()
    ) {
      setError(true);
      setResDay("");
      setResMonth("");
      setResYear("");
      setDay("");
      setMonth("");
      setYear("");
      return;
    }

    let date = new Date(year, month - 1, day);
    let currdate = new Date();
    let diffTime = Math.abs(currdate - date);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setResYear((y) => (y = Math.floor(diffDays / 365)));
    setResMonth((m) => (m = Math.floor((diffDays % 365) / 30)));
    setResDay((d) => (d = Math.floor((diffDays % 365) % 30)));

    setDay("");
    setMonth("");
    setYear("");
    setError(false);
  }

  return (
    <div className="age-calcultor">
      <Inputs
        day={day}
        month={month}
        year={year}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        handleSubmit={handleSubmit}
        error={error}
      />
      <Output day={resDay} month={resMonth} year={resYear} />
    </div>
  );
}

function Inputs({
  handleSubmit,
  day,
  month,
  year,
  setDay,
  setMonth,
  setYear,
  error,
}) {
  return (
    <form className="inputs" onSubmit={(e) => handleSubmit(e)}>
      {error ? <p className="error-msg">Invalid Input</p> : null}
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <div className="input">
          <label className={`${error ? "error" : ""}`}>DAY</label>
          <input
            className={`${error ? "error" : ""}`}
            type="text"
            value={day}
            onChange={(e) =>
              !isNaN(Number(e.target.value))
                ? setDay(Number(e.target.value))
                : ""
            }
            placeholder="DD"
          />
        </div>

        <div className="input">
          <label className={`${error ? "error" : ""}`}>MONTH</label>
          <input
            className={`${error ? "error" : ""}`}
            type="text"
            value={month}
            onChange={(e) =>
              !isNaN(Number(e.target.value))
                ? setMonth(Number(e.target.value))
                : ""
            }
            placeholder="MM"
          />
        </div>

        <div className="input">
          <label className={`${error ? "error" : ""}`}>YEAR</label>
          <input
            className={`${error ? "error" : ""}`}
            type="text"
            value={year}
            onChange={(e) =>
              !isNaN(Number(e.target.value))
                ? setYear(Number(e.target.value))
                : ""
            }
            placeholder="YYYY"
          />
        </div>
      </div>
      <SubmitBtn />
    </form>
  );
}

function SubmitBtn() {
  return (
    <div className="submit-container">
      <button className="btn">
        <img src="/images/icon-arrow.svg" alt="Arrow Icon" />
      </button>
    </div>
  );
}

function Output({ day, month, year }) {
  return (
    <div className="output">
      <p>
        <span>{year === "" ? "--" : year}</span>years
      </p>
      <p>
        <span>{month === "" ? "--" : month}</span>months
      </p>
      <p>
        <span>{day === "" ? "--" : day}</span>days
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/Youssef-Gad">
        Youssef Gad
      </a>
      .
    </footer>
  );
}
