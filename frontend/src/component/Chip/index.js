import React from "react";
import classNames from "classnames";
import Skew from "../Skew";
import Icon from "../Icon";

export default function Chip(props) {
  let { className, icon, primary } = props;

  const classes = {
    root: [classNames("Chip", /*{ [``]: !noHover },*/ className)],
    content: [classNames("Chip-content")]
  };

  let { root, content } = classes;

  return (
    <div className={root}>
      <Skew className={"Chip-skew"} variant={"outlined"} />
      <div className={content}>
        {icon && <Icon name={icon} className={"Chip-content-icon"} />}
        <span className={"Chip-content-primary"}>{primary}</span>
      </div>
    </div>
  );
}
