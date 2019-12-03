import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.scss";
import * as serviceWorker from "./utility/serviceWorker";
import { ReactComponent as Icon } from "./asset/icon.svg";

ReactDOM.render(
  <Fragment>
    <Icon />
    <App />
  </Fragment>,
  document.getElementById("root")
);

serviceWorker.unregister();
