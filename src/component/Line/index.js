import React from "react";
import Button from "../Button";
import Icon from "../Icon";

export default props => (
  <li className={"Line"}>
    <div className={"Line-info"}>
      <h4 className={"Line-info-title"}>Nome do evento</h4>
      <p className={"Line-info-description"}>
        <Icon name={"local"} />
        Local
      </p>
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
