import React, { useState, useEffect } from "react";
import "./TemporizadorComUseEffect.css";

const TemporizadorComUseEffect = () => {
  const [tempo, setTempo] = useState(0); // Armazena o tempo em segundos
  const [ativo, setAtivo] = useState(false); // Controla o estado do temporizador

  useEffect(() => {
    let intervalo = null;

    if (ativo) {
      // Inicia o temporizador
      intervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
    } else {
      clearInterval(intervalo); // Pausa o temporizador
    }

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, [ativo]);

  const iniciar = () => setAtivo(true); // Inicia o temporizador
  const pausar = () => setAtivo(false); // Pausa o temporizador
  const reiniciar = () => {
    setAtivo(false); // Pausa o temporizador
    setTempo(0); // Reseta o tempo para 0
  };

  return (
    <div className="temporizador-container">
      <h2 className="temporizador-titulo">Tempo: {tempo} segundos</h2>
      <div className="temporizador-botoes">
        <button
          className={`temporizador-botao iniciar ${
            ativo ? "desabilitado" : ""
          }`}
          onClick={iniciar}
          disabled={ativo}
        >
          Iniciar
        </button>
        <button
          className={`temporizador-botao pausar ${!ativo ? "desabilitado" : ""}`}
          onClick={pausar}
          disabled={!ativo}
        >
          Pausar
        </button>
        <button
          className="temporizador-botao reiniciar"
          onClick={reiniciar}
          disabled={tempo === 0}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default TemporizadorComUseEffect;
