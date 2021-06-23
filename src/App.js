// import News from './pages/News';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";

import "./assets/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;