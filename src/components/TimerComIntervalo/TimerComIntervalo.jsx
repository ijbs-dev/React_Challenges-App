import React, { useState, useEffect } from "react";
import "./TimerComIntervalo.css";

const TimerComIntervalo = () => {
  const [tempo, setTempo] = useState(0); // Tempo definido pelo usuário
  const [ativo, setAtivo] = useState(false); // Estado do timer (ativo ou pausado)

  useEffect(() => {
    let intervalo;

    if (ativo && tempo > 0) {
      // Inicia a contagem regressiva
      intervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo - 1);
      }, 1000);
    } else if (tempo === 0 && ativo) {
      // Para o timer e exibe alerta ao chegar a 0
      alert("O tempo acabou!");
      setAtivo(false);
    }

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar ou alterar estado
  }, [ativo, tempo]);

  const iniciar = () => setAtivo(true);
  const pausar = () => setAtivo(false);
  const reiniciar = () => {
    setTempo(0);
    setAtivo(false);
  };

  return (
    <div className="timer-container">
      <h2 className="timer-titulo">Timer: {tempo} segundos</h2>

      <div className="timer-controles">
        <input
          type="number"
          className="timer-input"
          onChange={(e) => setTempo(parseInt(e.target.value) || 0)}
          placeholder="Defina o tempo"
          disabled={ativo}
        />
        <button
          className="timer-botao timer-iniciar"
          onClick={iniciar}
          disabled={ativo || tempo === 0}
        >
          Iniciar
        </button>
        <button
          className="timer-botao timer-pausar"
          onClick={pausar}
          disabled={!ativo}
        >
          Pausar
        </button>
        <button
          className="timer-botao timer-reiniciar"
          onClick={reiniciar}
          disabled={tempo === 0 && !ativo}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default TimerComIntervalo;
