import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import classNames from "classnames";

export default props => {
  const [hovered, setHovered] = React.useState(false);

  const className = classNames(
    "Button",
    {
      [`Button-${props.type}`]: props.type,
      [`Button-${props.type}-${props.state}`]: props.state,
      [`Button--spacing`]: props.spacing,
      [`Button--hovered`]: hovered
    },
    props.className
  );

  const ButtonIcon = (
    <Icon
      name={props.icon}
      className={
        props.type === "small"
          ? `Button-label-icon`
          : `Button-adornment-ring-icon`
      }
    />
  );

  const Body = (
    <React.Fragment>
      <div className={"Button-label"}>
        {props.type === "small" && ButtonIcon}
        <Typography subject={props.label} className={"Button-label-text"} />
      </div>
      <div className={"Button-adornment"}>
        <div className={"Button-adornment-bar Button-adornment-bar--left"} />
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={"Button-adornment-ring"}
          id={`button-${props.id}`}
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
        <label className={className} htmlFor={`button-${props.id}`}>
          {Body}
        </label>
      )}
    </React.Fragment>
  );
};
