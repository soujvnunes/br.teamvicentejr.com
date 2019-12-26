import React from "react";
import classNames from "classnames";

export default function Card(props) {
  let { className, children } = props;

  const classes = {
    root: [
      classNames("Card" /*,{ [`IconButton--hover`]: !noHover }*/, className)
    ]
  };

  let { root } = classes;

  return <div className={root}>{children}</div>;
}
