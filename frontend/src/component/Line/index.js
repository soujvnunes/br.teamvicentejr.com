import React from "react";
import Button from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";

export default props => (
  <li className={"Line"}>
    <div className={"Line-info"}>
      <Typography subject={"Nome do evento"} className={"Line-info-title"} />
      <div className={"Line-info-local"}>
        <Icon name={"local"} className={"Line-info-local-icon"} />
        <Typography subject={"Local"} className={"Line-info-local-label"} />
      </div>
    </div>
    <Button
      id={"open-event"}
      className={"Footer-button"}
      type={"large"}
      icon={"add"}
      adornment={"bar"}
    />
  </li>
);
