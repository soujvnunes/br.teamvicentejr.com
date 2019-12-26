import React from "react";
import classNames from "classnames";

export default function CardMedia(props) {
  let { className, image, title } = props;

  const classes = {
    root: [classNames("CardMedia", className)]
  };

  let { root } = classes;
  return (
    <div
      className={root}
      title={title}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}
