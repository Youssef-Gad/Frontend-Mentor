import { useState } from "react";
import Inputs from "./Inputs";
import Output from "./Output";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);

  function calculateTip() {
    const tipAmount = (bill * (tip / 100)) / people;
    const total = bill / people + tipAmount;
    return { tipAmount: tipAmount.toFixed(2), total: total.toFixed(2) };
  }

  let { tipAmount, total } = calculateTip();

  function handleReset() {
    setBill(0);
    setPeople(people);
    setTip(0);
  }

  return (
    <main className="container">
      <header className="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </header>
      <article className="tip-calc">
        <Inputs
          setBill={setBill}
          bill={bill}
          setPeople={setPeople}
          setTip={setTip}
          people={people}
        />

        <Output tipAmount={tipAmount} total={total} onReset={handleReset} />
      </article>
    </main>
  );
}

export default TipCalculator;
