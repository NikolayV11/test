import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Main } from "./components/main";
function App() {
  return (
    <div className="container">
      <div className="page_layout">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
