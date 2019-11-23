import React from "react";
import Typography from "../Typography";

export default props => (
  <label className={`Button ${props.className}`} htmlFor={`button-${props.id}`}>
    <Typography subject={props.label} className={"Button-label"} />
    <div className={"Button-adornment"}>
      <div className={"Button-adornment-bar"} />
      <button
        className={"Button-adornment-ring Button-adornment-ring--left"}
        id={`button-${props.id}`}
        onClick={props.onClick}
        children={props.icon}
      />
      <div className={"Button-adornment-bar Button-adornment-ring--right"} />
    </div>
  </label>
);
