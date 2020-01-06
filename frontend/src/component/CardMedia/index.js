import React from "react";
import classNames from "classnames";
import Typography from "../Typography";

export default function CardMedia(props) {
  let { className, image, title } = props;

  const classes = {
    root: [classNames("CardMedia", className)],
    title: [classNames("CardMedia-title")]
  };

  return (
    <div
      className={classes.root}
      title={title}
      style={{ backgroundImage: `url(${image})` }}
    >
      {title && (
        <Typography subject className={classes.title}>
          {title}
        </Typography>
      )}
    </div>
  );
}
