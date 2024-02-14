function Output({ tipAmount, total, onReset }) {
  return (
    <section className="output">
      <section>
        <section className="tip-amount">
          <div>
            <p>Tip Amount</p>
            <p className="person">/ person</p>
          </div>

          <p className="amount">
            $
            {isNaN(tipAmount)
              ? "0.00"
              : tipAmount === "Infinity"
              ? "0.00"
              : tipAmount}
          </p>
        </section>

        <section className="total-amount">
          <div>
            <p>Total</p>
            <p className="person">/ person</p>
          </div>

          <p className="amount">
            ${isNaN(total) ? "0.00" : total === "Infinity" ? "0.00" : total}
          </p>
        </section>
      </section>

      <section>
        <button className="reset-btn" onClick={onReset}>
          RESET
        </button>
      </section>
    </section>
  );
}

export default Output;
