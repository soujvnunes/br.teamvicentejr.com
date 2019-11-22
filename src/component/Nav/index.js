import React from "react";
import Icon from "../Icon";

export default props => (
  <nav className={"Nav"}>
    <a href={"/"} className={"Nav-logo"}>
      <Icon name={"logo"} />
    </a>
    <a href={"/"} className={"Nav-link"}>
      <Icon name={"home"} />
    </a>
    <a href={"/"} className={"Nav-link"}>
      <Icon name={"people"} />
    </a>
    <a href={"/"} className={"Nav-link"}>
      <Icon name={"local"} />
    </a>
    <a href={"/"} className={"Nav-link"}>
      <Icon name={"user"} />
    </a>
  </nav>
);
