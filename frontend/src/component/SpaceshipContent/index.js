import React from "react";
import classNames from "classnames";
import Divider from "../Divider";

export default props => {
  let { className, children } = props;

  const classes = classNames("SpaceshipContent", className);

  return (
    <>
      <Divider />
      <div className={classes}>{children}</div>
      <Divider />
    </>
  );
};
