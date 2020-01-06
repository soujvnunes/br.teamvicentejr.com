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
    selectId,
    skew
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
      {skew && <Skew outlined />}
      <button
        className={"Button-adornment"}
        id={!selectId && id ? `button-${id}` : null}
        onClick={onClick}
      >
        <Icon name={icon} className={"Button-adornment-icon"} />
      </button>
      {label ? <span className={"Button-label"}>{label}</span> : children}
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
