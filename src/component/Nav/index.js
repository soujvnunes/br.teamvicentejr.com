import React from "react";
import Icon from "../Icon";
import Typography from "../Typography";

export default props => (
  <nav className={"ah-nav"}>
    <a href={"/"} className={"ah-logo-wrapper"}>
      <Icon name={"logo"} />
    </a>
    <Typography link href={"/"} className={"ah-n-link"}>
      <Icon name={"home"} />
    </Typography>
    <Typography link href={"/"} className={"ah-n-link"}>
      <Icon name={"people"} />
    </Typography>
    <Typography link href={"/"} className={"ah-n-link"}>
      <Icon name={"local"} />
    </Typography>
    <Typography link href={"/"} className={"ah-n-link"}>
      <Icon name={"user"} />
    </Typography>
  </nav>
);
