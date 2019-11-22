import React from "react";

export default props => (
  <a className={["Link", props.className].join(" ")} href={"/"}>
    <div className={"Link-wrap"}>
      <span className={"Link-label"}>
        {props.icon}
        {props.label}
      </span>
      <div className={"Link-adornment"}>
        <div className={"Link-adornment-bar"} />
        <div className={"Link-adornment-ring"} />
      </div>
    </div>
  </a>
);
