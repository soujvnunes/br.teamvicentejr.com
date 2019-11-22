import React from "react";

export default props => (
  <label className={"Button"} htmlFor={`button-${props.id}`}>
    <span className={"Button-label"}>{props.label}</span>
    <button id={`button-${props.id}`} onClick={props.onClick} />
  </label>
);
