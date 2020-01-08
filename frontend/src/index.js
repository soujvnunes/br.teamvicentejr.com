import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.scss";
import * as serviceWorker from "./util/serviceWorker";
import { ReactComponent as Icon } from "./asset/icon.svg";
import "./i18n";

ReactDOM.render(<Icon />, document.getElementById("icon"));
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
