import React from "react";
import classNames from "classnames";

export default function Panel(props) {
  let { className, image, children } = props;

  const classes = {
    root: [classNames("Panel", className)]
  };

  let { root } = classes;

  return (
    <div className={root} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
}
