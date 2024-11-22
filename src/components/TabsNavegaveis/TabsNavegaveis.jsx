import React, { useState } from "react";
import "./TabsNavegaveis.css";

const TabsNavegaveis = () => {
  const [abaAtiva, setAbaAtiva] = useState("sobre");

  return (
    <div className="tabs-container">
      {/* Navegação entre as abas */}
      <div className="tabs-nav">
        <button
          className={`tabs-button ${abaAtiva === "sobre" ? "active" : ""}`}
          onClick={() => setAbaAtiva("sobre")}
        >
          Sobre
        </button>
        <button
          className={`tabs-button ${abaAtiva === "contato" ? "active" : ""}`}
          onClick={() => setAbaAtiva("contato")}
        >
          Contato
        </button>
      </div>

      {/* Conteúdo das abas */}
      <div className="tabs-content">
        {abaAtiva === "sobre" && (
          <div className="tab-panel">
            <h3>Sobre Nós</h3>
            <p>
              Bem-vindo à aba Sobre! Aqui você encontra informações detalhadas
              sobre nosso trabalho e nossa equipe.
            </p>
          </div>
        )}
        {abaAtiva === "contato" && (
          <div className="tab-panel">
            <h3>Fale Conosco</h3>
            <p>
              Esta é a aba Contato. Entre em contato conosco pelo e-mail
              suporte@exemplo.com ou pelo telefone (11) 1234-5678.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsNavegaveis;
