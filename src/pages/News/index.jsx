import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles.css";

const News = () => {
  return (
    <>
      <Header />

      <main className="container">
        <h1>
          Tico e Teco: veja a abertura e pôster oficiais de nova animação do
          Disney+
        </h1>
        <picture>
          <img
            src="https://cdn.ome.lt/kourIIJKMmbc2HIb_krfrmLHzpg=/fit-in/837x500/smart/uploads/conteudo/fotos/Poster_Oficial_f3KpTOM.jpg"
            alt="tico e teco"
          />
        </picture>

        <p>
          Tico e Teco estão de volta. Desta vez, a dupla de esquilos vai se
          aventurar pelo Disney+, em novos episódios que estreiam em julho na
          plataforma de streaming do Mickey Mouse. Acima, você pode conferir a
          nova abertura da animação. Composto por três histórias de sete
          minutos, cada episódio vai seguir a dupla tentando viver
          tranquilamente nos parques da cidade. Os dois roedores também estarão
          acompanhados por Pluto, Butch e outros personagens icônicos da Disney.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default News;
