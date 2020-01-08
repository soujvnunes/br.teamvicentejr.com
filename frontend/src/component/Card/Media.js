import React from "react";
import classNames from "classnames";

export default props => {
  let { className, image, title } = props;

  const classes = {
    root: [classNames("CardMedia", className)]
  };

  return (
    <div
      className={classes.root}
      title={title}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};
