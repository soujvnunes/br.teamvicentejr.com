import React from "react";
import Icon from "../Icon";
import classNames from "classnames";
import Skew from "../Skew";

export default function Button(props) {
  let { type, state, className, icon, id, label, onClick, url } = props;

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
      <Skew className={"Button-skew"} />
      {label && <span className={"Button-label"}>{label}</span>}
      <button
        className={"Button-adornment"}
        id={id ? `button-${id}` : null}
        onClick={onClick}
      >
        <Skew className={"Button-adornment-skew"} />
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
        <label className={classes} htmlFor={id ? `button-${id}` : null}>
          {Body}
        </label>
      )}
    </>
  );
}
