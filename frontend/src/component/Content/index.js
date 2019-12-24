import React from "react";
import classNames from "classnames";

export default function Content(props) {
  let { children, className } = props;

  const classes = {
    root: [classNames("Content", className)]
  };

  let { root } = classes;
  return <div className={root}>{children}</div>;
}
