import React from "react";
import classNames from "classnames";

export default function Skew(props) {
  let { className } = props;

  const classes = {
    root: [classNames("Skew" /*, { [`class`]: prop }*/, className)]
  };

  let { root } = classes;

  return <div className={root} />;
}
