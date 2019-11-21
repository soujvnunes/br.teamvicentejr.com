import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.scss";
import * as serviceWorker from "./utility/serviceWorker";
import { ReactComponent as Icon } from "./asset/icon.svg";

ReactDOM.render(
  <React.Fragment>
    <Icon />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

serviceWorker.unregister();
