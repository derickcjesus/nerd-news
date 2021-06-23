import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useRouteMatch } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles.css";

const News = () => {
  const [noticia, setNoticia] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`/?id=${params.id}`).then((response) => {
      setNoticia(response.data);
    });
  }, [params.id]);

  const findNew = noticia.find((noticia) => noticia.id == params.id);

  return (
    <>
      <Header />
      {findNew && (
        <main className="container">
          <h1>{findNew.titulo}</h1>
          <picture>
            <img src={findNew.imagem} alt="imagem-noticia" />
          </picture>
          <h4>{findNew.publicacao}</h4>
          <p>{findNew.texto}</p>
        </main>
      )}

      <Footer />
    </>
  );
};

export default News;