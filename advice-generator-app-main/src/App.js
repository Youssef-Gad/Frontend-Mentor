import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="advice-box">
        <Quote />
      </div>
      <Footer />
    </div>
  );
}

function Quote() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  }

  return (
    <div className="quote">
      <div className="advice-num">
        <p>ADVICE # {adviceId === "" ? "117" : adviceId}</p>
      </div>
      <p>
        "
        {advice === ""
          ? "It is easy to sit up and take notice, what's difficult is getting up and taking action."
          : advice}
        "
      </p>
      <div className="line-icon">
        <img src="/images/pattern-divider-desktop.svg" alt="Pattern Divider" />
      </div>
      <button className="dice-icon" onClick={getAdvice}>
        <img src="/images/icon-dice.svg" alt="Pattern Divider" />
      </button>
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
export default App;
