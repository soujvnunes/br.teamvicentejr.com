import React from "react";
import classNames from "classnames";

export default props => {
  let { className, children, expanded, expand } = props;

  const classes = classNames("Line", className, {
    [`Line--expand`]: expand,
    [`Line--expanded`]: expanded
  });

  return <li className={classes}>{children}</li>;
};
