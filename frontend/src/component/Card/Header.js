import React from "react";
import Typography from "../Typography";
import classNames from "classnames";

export default props => {
  let { className, primary, secondary } = props;

  const classes = {
    root: [classNames("CardHeader", className)]
  };

  return (
    <hgroup className={classes.root}>
      <Typography subject className={"CardHeader-primary"}>
        {primary}
      </Typography>
      <Typography paragraph className={"CardHeader-secondary"}>
        {secondary}
      </Typography>
    </hgroup>
  );
};
