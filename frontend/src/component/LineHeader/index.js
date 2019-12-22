import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import classNames from "classnames";

export default function LineHeader(props) {
  let { className, primary, secondary, icon, children } = props;
  const classes = classNames("Line-header", className);
  return (
    <div className={classes}>
      <div className={"Line-header-info"}>
        <Typography subject className={"Line-header-info-title"}>
          {primary}
        </Typography>
        {secondary && (
          <div className={"Line-header-info-secondary"}>
            <Icon name={icon} className={"Line-header-info-secondary-icon"} />
            <Typography subject className={"Line-header-info-secondary-label"}>
              {secondary}
            </Typography>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
