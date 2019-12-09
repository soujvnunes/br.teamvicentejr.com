import React from "react";
import classNames from "classnames";

export default props => {
  let { className, children } = props;

  const classes = classNames("SpaceshipContent", className);

  return <div className={classes}>{children}</div>;
};
