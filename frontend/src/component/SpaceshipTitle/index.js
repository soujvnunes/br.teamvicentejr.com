import React from "react";
import Typography from "../Typography";
import classNames from "classnames";

export default props => {
  let { children, className } = props;
  const classes = classNames("SpaceshipTitle", className);

  return (
    <Typography title className={classes}>
      {children}
    </Typography>
  );
};
