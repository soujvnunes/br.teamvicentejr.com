import React from "react";
import classNames from "classnames";

export default function Divider(props) {
  let { className } = props;

  const classes = classNames("Divider", className);

  return <hr className={classes} />;
}
