import React, { useState } from "react";
import ContadorSimples from "./components/ContadorSimples/ContadorSimples";
import AlteracaoCorDeFundo from "./components/AlteracaoCorDeFundo/AlteracaoCorDeFundo";
import ListaDeTarefas from "./components/ListaDeTarefas/ListaDeTarefas";
import TemporizadorComUseEffect from "./components/TemporizadorComUseEffect/TemporizadorComUseEffect";
import FiltroDeLista from "./components/FiltroDeLista/FiltroDeLista";
import FormularioDeRegistroSimples from "./components/FormularioDeRegistroSimples/FormularioDeRegistroSimples";
import RequisicaoDeDados from "./components/RequisicaoDeDados/RequisicaoDeDados";
import GaleriaDeImagens from "./components/GaleriaDeImagens/GaleriaDeImagens";
import TimerComIntervalo from "./components/TimerComIntervalo/TimerComIntervalo";
import TabsNavegaveis from "./components/TabsNavegaveis/TabsNavegaveis";
import "./App.css";

const App = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [componenteSelecionado, setComponenteSelecionado] = useState(null);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => {
    setModalAberto(false);
    setComponenteSelecionado(null);
  };

  const selecionarComponente = (componente) => {
    setComponenteSelecionado(componente);
    setModalAberto(false);
  };

  return (
    <div className="App">
      <header>
        <h1>React Desafios</h1>
        <button className="menu-button" onClick={abrirModal}>
          Abrir Menu
        </button>
      </header>

      <main className="main-content">
        {componenteSelecionado === "ContadorSimples" && <ContadorSimples />}
        {componenteSelecionado === "AlteracaoCorDeFundo" && <AlteracaoCorDeFundo />}
        {componenteSelecionado === "ListaDeTarefas" && <ListaDeTarefas />}
        {componenteSelecionado === "TemporizadorComUseEffect" && <TemporizadorComUseEffect />}
        {componenteSelecionado === "FiltroDeLista" && <FiltroDeLista />}
        {componenteSelecionado === "FormularioDeRegistroSimples" && (
          <FormularioDeRegistroSimples />
        )}
        {componenteSelecionado === "RequisicaoDeDados" && <RequisicaoDeDados />}
        {componenteSelecionado === "GaleriaDeImagens" && <GaleriaDeImagens />}
        {componenteSelecionado === "TimerComIntervalo" && <TimerComIntervalo />}
        {componenteSelecionado === "TabsNavegaveis" && <TabsNavegaveis />}
      </main>

      {modalAberto && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Escolha um Desafio</h2>
            <ul className="menu-list">
              <li onClick={() => selecionarComponente("ContadorSimples")}>
                Contador Simples
              </li>
              <li onClick={() => selecionarComponente("AlteracaoCorDeFundo")}>
                Alteração de Cor de Fundo
              </li>
              <li onClick={() => selecionarComponente("ListaDeTarefas")}>
                Lista de Tarefas
              </li>
              <li onClick={() => selecionarComponente("TemporizadorComUseEffect")}>
                Temporizador com useEffect
              </li>
              <li onClick={() => selecionarComponente("FiltroDeLista")}>
                Filtro de Lista
              </li>
              <li onClick={() => selecionarComponente("FormularioDeRegistroSimples")}>
                Formulário de Registro Simples
              </li>
              <li onClick={() => selecionarComponente("RequisicaoDeDados")}>
                Aplicação de Requisição de Dados
              </li>
              <li onClick={() => selecionarComponente("GaleriaDeImagens")}>
                Galeria de Imagens
              </li>
              <li onClick={() => selecionarComponente("TimerComIntervalo")}>
                Timer com Intervalo e Alerta
              </li>
              <li onClick={() => selecionarComponente("TabsNavegaveis")}>
                Tabs Navegáveis
              </li>
            </ul>
            <button className="close-button" onClick={fecharModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
