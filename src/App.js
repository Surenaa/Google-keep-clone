import React from "react";
import "./styles.css";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";

function App(props) {
  return (
    <div>
      <Header />
      <CreateArea />
    </div>
  );
}

export default App;
