import React from "react";
import Typography from "../Typography";

export default props => (
  <a className={["Link", props.className].join(" ")} href={"/"}>
    <div className={"Link-wrap"}>
      <div className={"Link-label"}>
        {props.icon}
        <Typography subject={props.label} />
      </div>
      <div className={"Link-adornment"}>
        <div className={"Link-adornment-bar"} />
        <div className={"Link-adornment-ring"} />
      </div>
    </div>
  </a>
);
