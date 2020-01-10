import React, { useState } from "react";
import Icon from "../Icon";
import classNames from "classnames";
import Skew from "../Skew";

export default function Button(props) {
  const [state, setState] = useState({
    hover: false
  });
  let { variant, className, icon, id, label, onClick, url, skew } = props;
  let { hover } = state;

  function handleHover() {
    if (hover) setState({ ...state, hover: false });
    else setState({ ...state, hover: true });
  }
  const classes = {
    root: [
      classNames(
        "Button",
        {
          [`Button--variant-${variant}`]: variant
        },
        className
      )
    ]
  };

  function Body() {
    return (
      <>
        {skew && <Skew variant={variant} />}
        {icon && <Icon name={icon} className={"Button-icon"} active={hover} />}
        {label && <span className={"Button-label"}>{label}</span>}
      </>
    );
  }

  if (url) {
    return (
      <a
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
        className={classes.root}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Body />
      </a>
    );
  } else {
    return (
      <button
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
        className={classes.root}
        id={id}
        onClick={onClick}
      >
        <Body />
      </button>
    );
  }

  return null;
}
