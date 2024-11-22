import React, { useState } from "react";
import "./FiltroDeLista.css";

const FiltroDeLista = () => {
  const [filtro, setFiltro] = useState("");
  const [nomes, setNomes] = useState(["Ana", "João", "Maria"]);
  const [novoNome, setNovoNome] = useState("");

  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const adicionarNome = () => {
    if (novoNome.trim() && !nomes.includes(novoNome)) {
      setNomes([...nomes, novoNome]);
      setNovoNome("");
    }
  };

  return (
    <div className="filtro-container">
      <h2 className="filtro-title">Filtro de Lista</h2>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Digite para filtrar"
        className="filtro-input"
      />
      <ul className="filtro-lista">
        {nomesFiltrados.map((nome, index) => (
          <li key={index} className="filtro-item">{nome}</li>
        ))}
      </ul>
      <div className="adicionar-nome-container">
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Digite um nome"
          className="adicionar-nome-input"
        />
        <button onClick={adicionarNome} className="adicionar-nome-button">
          Adicionar Nome
        </button>
      </div>
    </div>
  );
};

export default FiltroDeLista;
