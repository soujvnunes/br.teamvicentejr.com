// tutorial used: https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/

import React from "react";

export default props => {
  return (
    <svg
      className={[
        `Icon icon-${props.name}`,
        props.rotate ? `Icon-rotate-${props.rotate}` : null,
        props.className
      ].join(" ")}
      viewBox={"0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={props.fill ? "currentColor" : "transparent"}
      stroke={props.stroke ? "currentColor" : "transparent"}
    >
      <title>Ícone {props.name}</title>
      <use xlinkHref={`#icon_${props.name}`} />
    </svg>
  );
};
