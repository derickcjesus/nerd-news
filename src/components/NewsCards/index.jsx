import React from "react";

import "./styles.css";

export default function NewsCards() {
  return (
    <div className="cards">
      <img
        src="https://cdn.ome.lt/xmo7000Z4L09T3vQgjX1HUdwRhA=/987x0/smart/uploads/conteudo/fotos/amigos.png"
        alt=""
      />
      <div className="container">
        <h1>
          Loki | Wunmi Mosaku, a B-15, conhece Tom Hiddleston há mais de 15 anos
        </h1>
        <p>
          Apesar da rivalidade na série, atores são amigos e estudaram juntos na
          Inglaterra.
        </p>
        <a href="">LER MAIS</a>
      </div>
    </div>
  );
}
