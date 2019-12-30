import React from "react";
import classNames from "classnames";

export default function Skew(props) {
  let { className, curve, axis } = props;

  const classes = {
    root: [
      classNames(
        "Skew",
        { [`Skew--curve-${curve}`]: curve },
        { [`Skew--axis-${axis}`]: axis },
        className
      )
    ]
  };

  let { root } = classes;

  return <div className={root} />;
}
