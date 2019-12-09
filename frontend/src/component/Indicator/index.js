import React from "react";
import classNames from "classnames";

export default props => {
  let { className } = props;
  const classes = classNames("Indicator", className);

  return (
    <div className={classes}>
      <div className={"Indicator-bar"} />
    </div>
  );
};
