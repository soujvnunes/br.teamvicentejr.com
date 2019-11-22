import React from "react";

export default props => (
  <a className={["c-link", "condensed"].join(" ")} href={"/"}>
    <span className={"c-l-label"}>
      {props.icon}
      {props.label}
    </span>
    <div className={"c-l-adornment"}>
      <div className={"c-l-a-bar"} />
      <div className={"c-l-a-ring"} />
    </div>
  </a>
);
