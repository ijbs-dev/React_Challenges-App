import React, { useState, useEffect } from "react";
import "./AlteracaoCorDeFundo.css";

const AlteracaoCorDeFundo = () => {
  const [cor, setCor] = useState("#ffffff");

  // Função para gerar uma nova cor aleatória
  const alterarCor = () => {
    const novaCor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    setCor(novaCor);
  };

  // Atualiza a cor de fundo do corpo da página
  useEffect(() => {
    document.body.style.backgroundColor = cor;
  }, [cor]);

  return (
    <div className="alteracao-cor-container">
      <h2 className="alteracao-cor-title">Cor de Fundo Atual</h2>
      <p className="alteracao-cor-value" style={{ color: cor }}>{cor}</p>
      <button className="alteracao-cor-button" onClick={alterarCor}>
        Alterar Cor de Fundo
      </button>
    </div>
  );
};

export default AlteracaoCorDeFundo;
