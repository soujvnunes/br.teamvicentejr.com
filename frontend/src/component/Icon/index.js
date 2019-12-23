// tutorial used: https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/

import React from "react";
import classNames from "classnames";

export default function Icon(props) {
  let { className, name, fill, stroke } = props;

  const classes = classNames("Icon", { [`Icon-${name}`]: name }, className);

  return (
    <svg
      className={classes}
      viewBox={"0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={fill ? "currentColor" : "transparent"}
      stroke={stroke ? "currentColor" : "transparent"}
    >
      <title>{name}'s icon</title>
      <use xlinkHref={`#icon_${name}`} />
    </svg>
  );
}
