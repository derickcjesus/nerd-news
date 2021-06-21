import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "../../components/Header";
import NewsCard from "../../components/NewsCard";
import Footer from "../../components/Footer";

const ListNews = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/news").then((response) => {
      setNoticias(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      {noticias.map((noticia) => (
        <NewsCard key={noticia.id} props={noticia} />
      ))}

      <Footer />
    </>
  );
};

export default ListNews;
