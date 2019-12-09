import React, { useState } from "react";
import IconButton from "../IconButton";
import Icon from "../Icon";
import Typography from "../Typography";
import classNames from "classnames";

export default props => {
  const [state, setState] = useState({
    expandLine: false
  });
  let { expandLine } = state;

  let { className, primary, secondary, icon, children } = props;

  function handleExpandLine() {
    if (expandLine) setState({ ...state, expandLine: false });
    else setState({ ...state, expandLine: true });
  }

  const classes = classNames("Line", className, {
    [`Line--expand`]: expandLine
  });

  return (
    <li className={classes}>
      <div className={"Line-header"}>
        <div className={"Line-header-info"}>
          <Typography subject className={"Line-header-info-title"}>
            {primary}
          </Typography>
          <div className={"Line-header-info-local"}>
            <Icon name={icon} className={"Line-header-info-local-icon"} />
            <Typography subject className={"Line-header-info-local-label"}>
              {secondary}
            </Typography>
          </div>
        </div>
        <IconButton
          className={"Line-header-button"}
          type={"large"}
          icon={expandLine ? "remove" : "add"}
          onClick={handleExpandLine}
        />
      </div>
      <div className={"Line-content"}>{children}</div>
    </li>
  );
};
