import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "../../components/Header";
import NameBlog from "../../components/NameBlog";
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

      <NameBlog />

      <main>
        {noticias.map((noticia) => (
          <NewsCard key={noticia.id} props={noticia} />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default ListNews;
