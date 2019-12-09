import React from "react";
import Typography from "../Typography";
/*
import Icon from "../Icon";
*/
/*
import Button from "../Button";
*/

export default props => (
  <footer className={"Footer"}>
    {/*    <Button
      id={"page-roll-down"}
      className={"Footer-button"}
      type={"large"}
      icon={"chevrons"}
    />*/}
    <span className={"Footer-rights"}>
      ©{" "}
      <Typography subject className={"Footer-rights-label"}>
        Vicente Júnior
      </Typography>
    </span>
  </footer>
);
