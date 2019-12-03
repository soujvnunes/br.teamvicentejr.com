import React from "react";
import classNames from "classnames";

export default props => {
  const className = classNames("Indicator", props.className);

  return (
    <div className={className}>
      <div className={"Indicator-bar"} />
    </div>
  );
};
