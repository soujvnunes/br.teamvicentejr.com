import React from "react";
import Icon from "../Icon";
import classNames from "classnames";
import Skew from "../Skew";

export default function Button(props) {
  let {
    type,
    state,
    className,
    icon,
    id,
    label,
    onClick,
    url,
    children,
    selectId
  } = props;

  const classes = classNames(
    "Button",
    {
      [`Button-${type}`]: type,
      [`Button-${type}--${state}`]: state
    },
    className
  );

  const Body = (
    <>
      <Skew outlined />
      {label ? <span className={"Button-label"}>{label}</span> : children}
      <button
        className={"Button-adornment"}
        id={!selectId && id ? `button-${id}` : null}
        onClick={onClick}
      >
        <Skew contained />
        <Icon name={icon} className={"Button-adornment-icon"} />
      </button>
    </>
  );

  return (
    <>
      {url ? (
        <a
          className={classes}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Body}
        </a>
      ) : (
        <label
          className={classes}
          htmlFor={!selectId ? (id ? `button-${id}` : null) : selectId}
        >
          {Body}
        </label>
      )}
    </>
  );
}
