// tutorial used: https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/

import React from "react";
import classNames from "classnames";

export default props => {
  const className = classNames(
    "Icon",
    {
      [`Icon-${props.name}`]: props.name,
      [`Icon-rotate-${props.rotate}`]: props.rotate
    },
    props.className
  );

  return (
    <svg
      className={className}
      viewBox={"0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={props.fill ? "currentColor" : "transparent"}
      stroke={props.stroke ? "currentColor" : "transparent"}
    >
      <title>{props.name}'s icon</title>
      <use xlinkHref={`#icon_${props.name}`} />
    </svg>
  );
};
