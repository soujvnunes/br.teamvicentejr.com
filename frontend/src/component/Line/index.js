import React from "react";
import IconButton from "../IconButton";
import Icon from "../Icon";
import Typography from "../Typography";
import classNames from "classnames";

export default props => {
  let { className, primary, secondary, icon } = props;

  const classes = classNames("Line", className);
  return (
    <li className={classes}>
      <div className={"Line-info"}>
        <Typography subject className={"Line-info-title"}>
          {primary}
        </Typography>
        <div className={"Line-info-local"}>
          <Icon name={icon} className={"Line-info-local-icon"} />
          <Typography subject className={"Line-info-local-label"}>
            {secondary}
          </Typography>
        </div>
      </div>
      <IconButton className={"Line-button"} type={"large"} icon={"add"} />
    </li>
  );
};
