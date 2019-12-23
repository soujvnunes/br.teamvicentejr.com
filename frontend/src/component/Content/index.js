import React from "react";
import classNames from "classnames";

export default function Content(props) {
  let { children, className } = props;

  const classes = {
    root: [classNames("Content" /*, { [`class`]: prop }*/, className)]
  };

  let { root } = classes;
  return (
    <div className={root}>
      <div className={`${root}-wrapper`}>{children}</div>
    </div>
  );
}
