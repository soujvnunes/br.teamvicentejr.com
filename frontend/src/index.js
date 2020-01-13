import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import * as serviceWorker from "./script/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
