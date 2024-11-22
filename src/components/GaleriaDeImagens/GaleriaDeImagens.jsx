import React, { useState } from "react";
import styles from "./GaleriaDeImagens.module.css";

const imagens = [
  "https://via.placeholder.com/150/0000FF",
  "https://via.placeholder.com/150/FF0000",
  "https://via.placeholder.com/150/00FF00",
];

const GaleriaDeImagens = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const selecionarImagem = (index) => {
    setImagemSelecionada(index);
  };

  const fecharModal = () => {
    setImagemSelecionada(null);
  };

  const imagemAnterior = () => {
    if (imagemSelecionada > 0) {
      setImagemSelecionada(imagemSelecionada - 1);
    }
  };

  const proximaImagem = () => {
    if (imagemSelecionada < imagens.length - 1) {
      setImagemSelecionada(imagemSelecionada + 1);
    }
  };

  return (
    <div className={styles.galeriaContainer}>
      <h2 className={styles.galeriaTitulo}>Galeria de Imagens</h2>
      <div className={styles.galeriaThumbnails}>
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem}
            alt={`Imagem ${index}`}
            className={styles.galeriaThumbnail}
            onClick={() => selecionarImagem(index)}
          />
        ))}
      </div>
      {imagemSelecionada !== null && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={fecharModal}>
              Fechar
            </button>
            <button
              className={`${styles.modalNav} ${styles.modalNavPrev}`}
              onClick={imagemAnterior}
              disabled={imagemSelecionada === 0}
            >
              ◀
            </button>
            <img
              src={imagens[imagemSelecionada]}
              alt={`Imagem ${imagemSelecionada}`}
              className={styles.modalImage}
            />
            <button
              className={`${styles.modalNav} ${styles.modalNavNext}`}
              onClick={proximaImagem}
              disabled={imagemSelecionada === imagens.length - 1}
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaDeImagens;
