import React from "react";
import classNames from "classnames";
import Icon from "../Icon";

export default props => {
  const [focused, setFocused] = React.useState(false);

  const className = classNames(
    "Input",
    { [`Input-${props.type}`]: props.type },
    { [`Input--focused`]: focused },
    "Input--spacing",
    props.className
  );

  return (
    <label htmlFor={`input-${props.id}`} className={className}>
      <div className={"Input-icons"}>
        <Icon name={props.icon} className={"Input-icons-icon"} />
      </div>
      <input
        className={"Input-base"}
        placeholder={props.label}
        id={`input-${props.id}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </label>
  );
};
