import React, { useState } from "react";
import "./ContadorSimples.css";

const ContadorSimples = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount((prev) => prev + 1);
  const decrementar = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="contador-container">
      <h2 className="contador-title">Contador</h2>
      <p className="contador-value">{count}</p>
      <div className="contador-buttons">
        <button className="button incrementar" onClick={incrementar}>
          Incrementar
        </button>
        <button
          className={`button decrementar ${count === 0 ? "disabled" : ""}`}
          onClick={decrementar}
          disabled={count === 0}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default ContadorSimples;
