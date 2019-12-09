import React from "react";
import classNames from "classnames";
import Icon from "../Icon";

export default props => {
  let { className, icon, id, onClick } = props;

  const classes = {
    root: [classNames(className, "IconButton")],
    adornment: [classNames("IconButton-adornment")],
    iconButton: [classNames("IconButton-adornment-icon")]
  };

  let { root, adornment, iconButton } = classes;

  return (
    <label className={root} htmlFor={id ? `button-${id}` : null}>
      <button
        className={adornment}
        id={id ? `button-${id}` : null}
        onClick={onClick}
      >
        <Icon name={icon} className={iconButton} />
      </button>
    </label>
  );
};
