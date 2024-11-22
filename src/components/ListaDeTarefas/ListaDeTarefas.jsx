import React, { useState } from "react";
import "./ListaDeTarefas.css";

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  const adicionarTarefa = () => {
    if (input.trim()) {
      setTarefas([...tarefas, { texto: input, concluida: false }]);
      setInput("");
    }
  };

  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  const marcarConcluida = (index) => {
    setTarefas(
      tarefas.map((tarefa, i) =>
        i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida);

  return (
    <div className="lista-container">
      <h2 className="lista-titulo">Lista de Tarefas</h2>
      <div className="lista-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma nova tarefa"
          className="lista-input"
        />
        <button onClick={adicionarTarefa} className="lista-adicionar">
          Adicionar
        </button>
      </div>
      <ul className="lista-tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={index} className={`tarefa-item ${tarefa.concluida ? "concluida" : ""}`}>
            <span>{tarefa.texto}</span>
            <div className="tarefa-botoes">
              <button
                onClick={() => marcarConcluida(index)}
                className={`tarefa-concluir ${tarefa.concluida ? "desmarcar" : ""}`}
              >
                {tarefa.concluida ? "Desmarcar" : "Concluir"}
              </button>
              <button onClick={() => removerTarefa(index)} className="tarefa-remover">
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
      {tarefasPendentes.length > 0 && (
        <>
          <h3 className="lista-subtitulo">Tarefas Pendentes</h3>
          <ul className="lista-tarefas-pendentes">
            {tarefasPendentes.map((tarefa, index) => (
              <li key={index} className="tarefa-pendente">
                {tarefa.texto}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ListaDeTarefas;
