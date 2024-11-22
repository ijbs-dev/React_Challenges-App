import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RequisicaoDeDados.css";

const RequisicaoDeDados = () => {
  const [posts, setPosts] = useState([]); // Todos os posts
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState(null); // Erro na requisição
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const postsPerPage = 3; // Posts por página

  // Função para buscar dados da API
  const fetchData = async () => {
    setLoading(true); // Ativa o carregamento
    setError(null); // Reseta o erro antes de tentar buscar novamente
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data); // Atualiza os dados
      setCurrentPage(1); // Reseta a página para a primeira
    } catch (error) {
      setError("Erro ao buscar dados. Por favor, tente novamente mais tarde.");
    } finally {
      setLoading(false); // Desativa o carregamento
    }
  };

  // Faz a requisição inicial ao carregar o componente
  useEffect(() => {
    fetchData();
  }, []);

  // Função para calcular os posts exibidos na página atual
  const getCurrentPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts.slice(startIndex, endIndex);
  };

  // Manipula navegação de páginas
  const nextPage = () => {
    if (currentPage * postsPerPage < posts.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="requisicao-container">
      <h2 className="requisicao-titulo">Lista de Posts</h2>

      <button
        className="requisicao-botao"
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? "Carregando..." : "Recarregar Dados"}
      </button>

      {error && <p className="requisicao-erro">{error}</p>}

      <ul className="requisicao-lista">
        {getCurrentPosts().map((post) => (
          <li key={post.id} className="requisicao-item">
            <h3 className="requisicao-item-titulo">{post.title}</h3>
            <p className="requisicao-item-body">{post.body}</p>
          </li>
        ))}
      </ul>

      {loading && <p className="requisicao-carregando">Carregando posts...</p>}

      <div className="paginacao">
        <button
          className="paginacao-botao"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="paginacao-info">
          Página {currentPage} de {Math.ceil(posts.length / postsPerPage)}
        </span>
        <button
          className="paginacao-botao"
          onClick={nextPage}
          disabled={currentPage * postsPerPage >= posts.length}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default RequisicaoDeDados;
