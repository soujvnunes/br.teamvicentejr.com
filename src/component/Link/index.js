import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";

export default props => (
  <a className={["Link", props.className].join(" ")} href={"/"}>
    <div className={"Link-wrap"}>
      <div className={"Link-label"}>
        <Icon name={props.icon} className={"Link-label-icon"} />
        <Typography subject={props.label} />
      </div>
      <div className={"Link-adornment"}>
        <div className={"Link-adornment-bar"} />
        <div className={"Link-adornment-ring"} />
      </div>
    </div>
  </a>
);
