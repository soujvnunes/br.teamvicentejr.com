import React from "react";
import classNames from "classnames";

export default props => {
  let { className, children, expanded, expand, noHover } = props;

  const classes = classNames("Line", className, {
    [`Line--expand`]: expand,
    [`Line--expanded`]: expanded,
    [`Line--hover`]: !noHover
  });

  return <li className={classes}>{children}</li>;
};
