import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import classNames from "classnames";

export default props => {
  let {
    type,
    state,
    spacing,
    className,
    icon,
    id,
    label,
    onClick,
    url
  } = props;

  const classes = classNames(
    "Button",
    {
      [`Button-${type}`]: type,
      [`Button-${type}--${state}`]: state,
      [`Button--spacing`]: spacing
    },
    className
  );

  const ButtonIcon = (
    <Icon
      name={icon}
      className={
        type === "small" ? `Button-label-icon` : `Button-adornment-ring-icon`
      }
    />
  );

  const Body = (
    <>
      {label ? (
        <div className={"Button-label"}>
          {type === "small" && ButtonIcon}
          <Typography subject className={"Button-label-text"}>
            {label}
          </Typography>
        </div>
      ) : null}
      <div className={"Button-adornment"}>
        <div className={"Button-adornment-bar Button-adornment-bar--left"} />
        <button
          className={"Button-adornment-ring"}
          id={id ? `button-${id}` : null}
          onClick={onClick}
        >
          {type !== "small" ? (
            ButtonIcon
          ) : (
            <Icon
              name={"circle"}
              className={"Button-adornment-ring-icon--small"}
            />
          )}
        </button>
        <div className={"Button-adornment-bar Button-adornment-bar--right"} />
      </div>
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
};
