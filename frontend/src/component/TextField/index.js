import React, { useState } from "react";
import classNames from "classnames";
import IconButton from "../IconButton";
import InputBase from "../InputBase";
import Skew from "../Skew";

export default function TextField(props) {
  const [state, setState] = useState({
    focused: false
  });

  let { focused } = state;
  let { type, id, icon, label, className, fullWidth } = props;

  const classes = classNames(
    "TextField",
    { [`TextField-${type}`]: type },
    { [`TextField--focused`]: focused },
    { [`TextField--fullWidth`]: fullWidth },
    "TextField--spacing",
    className
  );

  const handleFocus = () => {
    if (focused) setState({ ...state, focused: false });
    else setState({ ...state, focused: true });
  };

  return (
    <label htmlFor={id} className={classes}>
      <IconButton icon={icon} className={"TextField-icon"} />
      <div className={"TextField-divider"}>
        <Skew />
      </div>
      <InputBase
        className={"TextField-base"}
        label={label}
        id={id}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
    </label>
  );
}
