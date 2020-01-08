import React from "react";
import classNames from "classnames";

export default props => {
  let { className, children } = props;

  const classes = {
    root: [
      classNames("Card" /*,{ [`IconButton--hover`]: !noHover }*/, className)
    ]
  };

  return <div className={classes.root}>{children}</div>;
};
