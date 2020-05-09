import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Fior from "./fior";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Fior />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
