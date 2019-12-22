import React from "react";
import classNames from "classnames";
import Icon from "../Icon";

export default props => {
  let { className, icon, id, onClick, url, noHover } = props;

  const classes = {
    root: [
      classNames("IconButton", { [`IconButton--hover`]: !noHover }, className)
    ],
    adornment: [classNames("IconButton-adornment")],
    iconButton: [classNames("IconButton-adornment-icon")]
  };

  let { root, adornment, iconButton } = classes;

  const Body = (
    <button
      className={adornment}
      id={id ? `button-${id}` : null}
      onClick={onClick}
    >
      <Icon name={icon} className={iconButton} />
    </button>
  );

  return (
    <>
      {url ? (
        <a
          className={root}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Body}
        </a>
      ) : (
        <label className={root} htmlFor={id ? `button-${id}` : null}>
          {Body}
        </label>
      )}
    </>
  );
};
