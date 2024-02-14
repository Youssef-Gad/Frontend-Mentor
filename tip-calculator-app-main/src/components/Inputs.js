import { useState } from "react";

function Inputs({ setBill, setPeople, setTip, people }) {
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);

  function handleActive(id) {
    setActive(id);
  }

  function handlePeopleInput(e) {
    setPeople(Number(e.target.value));
    if (Number(e.target.value) === 0) setError(true);
    else setError(false);
  }

  return (
    <section className="inputs">
      <section className="bill-input">
        <label>Bill</label>
        <div className="input-container">
          <img src="/images/icon-dollar.svg" alt="dollar sign" />
          <input
            type="number"
            min={0}
            onChange={(e) => setBill(Number(e.target.value))}
            placeholder="0"
          />
        </div>
      </section>

      <section className="select-tip">
        <span>Select Tip %</span>
        <div className="select-percentage">
          <Button
            id={1}
            active={active}
            onActive={() => handleActive(1)}
            onSelectTip={setTip}
            people={people}
            setError={setError}
          >
            5%
          </Button>
          <Button
            id={2}
            active={active}
            onActive={() => handleActive(2)}
            onSelectTip={setTip}
            people={people}
            setError={setError}
          >
            10%
          </Button>
          <Button
            id={3}
            active={active}
            onActive={() => handleActive(3)}
            onSelectTip={setTip}
            people={people}
            setError={setError}
          >
            15%
          </Button>
          <Button
            id={4}
            active={active}
            onActive={() => handleActive(4)}
            onSelectTip={setTip}
            people={people}
            setError={setError}
          >
            25%
          </Button>
          <Button
            id={5}
            active={active}
            onActive={() => handleActive(5)}
            onSelectTip={setTip}
            people={people}
            setError={setError}
          >
            50%
          </Button>
          <input
            type="number"
            min={0}
            placeholder="Custom"
            onChange={(e) => setTip(Number(e.target.value))}
          />
        </div>
      </section>

      <section className="people-input">
        <div className="lable-containter">
          <label>Number of People</label>
          {error && <label className="error">Can't be zero</label>}
        </div>
        <div className={`input-container ${error ? "error" : ""}`}>
          <img src="/images/icon-person.svg" alt="person icon" />
          <input
            type="number"
            min={0}
            onChange={(e) => handlePeopleInput(e)}
            placeholder="0"
          />
        </div>
      </section>
    </section>
  );
}

export function Button({
  id,
  active,
  onActive,
  onSelectTip,
  people,
  setError,
  children,
}) {
  function handleClick(e) {
    onSelectTip(
      Number(
        e.target.innerHTML
          .split("")
          .filter((e) => e !== "%")
          .join("")
      )
    );
    onActive();
    if (people === 0) setError(true);
  }

  return (
    <button
      className={active === id ? "active" : ""}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
}

export default Inputs;
