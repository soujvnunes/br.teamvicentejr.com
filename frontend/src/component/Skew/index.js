import React from "react";
import classNames from "classnames";

export default function Skew(props) {
  let { className, curve, axis, outlined, contained, outline } = props;

  const classes = {
    root: [
      classNames(
        "Skew",
        { [`Skew--curve-${curve}`]: curve },
        { [`Skew--axis-${axis}`]: axis },
        { [`Skew--outlined`]: outlined },
        { [`Skew--contained`]: contained },
        { [`Skew--outline-${outline}`]: outline },
        className
      )
    ]
  };

  let { root } = classes;

  return <div className={root} />;
}
