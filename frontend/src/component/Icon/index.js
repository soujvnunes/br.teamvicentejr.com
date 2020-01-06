// tutorial used: https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/

import React from "react";
import classNames from "classnames";

export default function Icon(props) {
  let { className, name, active } = props;

  const classes = {
    root: [
      classNames(
        "Icon",
        { [`Icon-${name}`]: name },
        { [`Icon--active`]: active },
        className
      )
    ]
  };

  return (
    <svg
      className={classes.root}
      viewBox={"0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>{name}'s icon</title>
      <use xlinkHref={`#icon_${name}`} />
    </svg>
  );
}
