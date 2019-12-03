import React from "react";
import Typography from "../Typography";
/*
import Icon from "../Icon";
*/
import Button from "../Button";

export default props => (
  <footer className={"Footer"}>
    <Button
      id={"page-roll-down"}
      className={"Footer-button"}
      type={"large"}
      icon={"chevrons"}
    />
    <span className={"Footer-rights"}>
      ©{" "}
      <Typography
        subject={"Vicente Júnior"}
        className={"Footer-rights-label"}
      />
    </span>
  </footer>
);
