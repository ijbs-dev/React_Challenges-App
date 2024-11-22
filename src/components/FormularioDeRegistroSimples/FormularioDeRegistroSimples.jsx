import React, { useState } from "react";
import "./FormularioDeRegistroSimples.css";

const FormularioDeRegistroSimples = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }
    setMensagem(
      `Bem-vindo(a), ${nome}! <br /> Seu e-mail é: ${email}.`
    );
  };

  return (
    <div className="formulario-container">
      <h2 className="formulario-titulo">Formulário de Registro</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="formulario-campo">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            className="formulario-input"
          />
        </div>
        <div className="formulario-campo">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="formulario-input"
          />
        </div>
        <div className="formulario-campo">
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className="formulario-input"
          />
        </div>
        <button type="submit" className="formulario-botao">
          Registrar
        </button>
      </form>
      {mensagem && (
        <p
          className="formulario-mensagem"
          dangerouslySetInnerHTML={{ __html: mensagem }}
        ></p>
      )}
    </div>
  );
};

export default FormularioDeRegistroSimples;
