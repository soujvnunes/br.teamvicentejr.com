import React from "react";
import classNames from "classnames";

export default function Wrapper(props) {
  let { children, className } = props;
  const classes = { root: [classNames("Wrapper", className)] };
  let { root } = classes;
  return <div className={root}>{children}</div>;
}
