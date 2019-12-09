import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon";

export default props => {
  const [state, setState] = useState({
    focused: false
  });

  let { focused } = state;
  let { type, id, icon, label, className, fullWidth } = props;

  const classes = classNames(
    "Input",
    { [`Input-${type}`]: type },
    { [`Input--focused`]: focused },
    { [`Input--fullWidth`]: fullWidth },
    "Input--spacing",
    className
  );

  return (
    <label htmlFor={`input-${id}`} className={classes}>
      <div className={"Input-icons"}>
        <Icon name={icon} className={"Input-icons-icon"} />
      </div>
      <input
        className={"Input-base"}
        placeholder={label}
        id={`input-${id}`}
        onFocus={() => setState({ ...state, focused: true })}
        onBlur={() => setState({ ...state, focused: false })}
      />
    </label>
  );
};
