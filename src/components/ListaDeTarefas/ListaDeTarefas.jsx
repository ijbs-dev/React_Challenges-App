import React, { useState } from "react";

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
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: tarefa.concluida ? "line-through" : "none",
              }}
            >
              {tarefa.texto}
            </span>
            <button onClick={() => marcarConcluida(index)}>
              {tarefa.concluida ? "Desmarcar" : "Concluir"}
            </button>
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <h3>Tarefas Pendentes</h3>
      <ul>
        {tarefasPendentes.map((tarefa, index) => (
          <li key={index}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTarefas;
