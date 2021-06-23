import React from "react";

import "./styles.css";

const NewsCard = ({ props }) => {
  return (
    <div className="cards">
      <img src={props.imagem} alt={props.titulo} />
      <div className="container-news-card">
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
        <span>LER MAIS</span>
      </div>
    </div>
  );
};

export default NewsCard;
