import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import classNames from "classnames";

export default props => {
  const className = classNames(
    "Button",
    {
      [`Button-${props.type}`]: props.type,
      [`Button-${props.type}--${props.state}`]: props.state,
      [`Button--spacing`]: props.spacing,
      [`Button-no-${props.adornment}`]: props.adornment
    },
    props.className
  );

  const ButtonIcon = (
    <Icon
      name={props.state ? "remove" : props.icon}
      className={
        props.type === "small"
          ? `Button-label-icon`
          : `Button-adornment-ring-icon`
      }
    />
  );

  const Body = (
    <React.Fragment>
      {props.label ? (
        <div className={"Button-label"}>
          {props.type === "small" && ButtonIcon}
          <Typography subject={props.label} className={"Button-label-text"} />
        </div>
      ) : null}
      <div className={"Button-adornment"}>
        <div className={"Button-adornment-bar Button-adornment-bar--left"} />
        <button
          className={"Button-adornment-ring"}
          id={props.id ? `button-${props.id}` : null}
          onClick={props.onClick}
        >
          {props.type !== "small" ? (
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
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {props.url ? (
        <a
          className={className}
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Body}
        </a>
      ) : (
        <label
          className={className}
          htmlFor={props.id ? `button-${props.id}` : null}
        >
          {Body}
        </label>
      )}
    </React.Fragment>
  );
};
