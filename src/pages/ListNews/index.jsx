import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import Header from "../../components/Header";
import NameBlog from "../../components/NameBlog";
import NewsCard from "../../components/NewsCard";
import Footer from "../../components/Footer";

import "./styles.css";

const ListNews = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    api.get("").then((response) => {
      setNoticias(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <NameBlog />

      <main>
        {noticias.map((noticia) => (
          <Link key={noticia.id} to={`news/${noticia.id}`}>
            <NewsCard props={noticia} />
          </Link>
        ))}
      </main>

      <Footer />
    </>
  );
};

export default ListNews;
