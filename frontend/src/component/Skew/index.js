import React from "react";
import classNames from "classnames";

export default function Skew(props) {
  let { className, curve, axis, variant, outline } = props;

  const classes = {
    root: [
      classNames(
        "Skew",
        { [`Skew--curve-${curve}`]: curve },
        { [`Skew--axis-${axis}`]: axis },
        { [`Skew--variant-${variant}`]: variant },
        { [`Skew--outline-${outline}`]: outline },
        className
      )
    ]
  };

  return <div className={classes.root} />;
}
