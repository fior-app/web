import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FiorApp from "./fior-app";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <FiorApp />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
