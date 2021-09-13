import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div>
      <h3>Pagina nao encontrada</h3>
      <Link to="/">
        <button>Voltar ao inicio</button>
      </Link>
    </div>
  );
};

export default NotFoundScreen;
