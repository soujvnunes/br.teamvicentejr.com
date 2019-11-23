import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";

export default props => (
  <footer className={"Footer"}>
    <Icon name={"logo"} stroke />
    <span className={"Footer-rights"}>
      ©{" "}
      <Typography
        subject={"Vicente Júnior"}
        className={"Footer-rights-label"}
      />
    </span>
  </footer>
);
