import React from "react";
import classNames from "classnames";
import Icon from "../Icon";
import Skew from "../Skew";

export default function IconButton(props) {
  let { className, icon, id, onClick, url, noHover, skewCurve } = props;

  const classes = {
    root: [
      classNames("IconButton", { [`IconButton--hover`]: !noHover }, className)
    ],
    adornment: [classNames("IconButton-adornment")],
    iconButton: [classNames("IconButton-adornment-icon")]
  };

  let { root, adornment, iconButton } = classes;

  const Body = (
    <button className={adornment} id={id} onClick={onClick}>
      <Icon name={icon} className={iconButton} />
      {!noHover && <Skew curve={skewCurve} outlined />}
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
        <div className={root}>{Body}</div>
      )}
    </>
  );
}
