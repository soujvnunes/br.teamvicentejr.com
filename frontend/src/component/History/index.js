import React from "react";
import classNames from "classnames";
import Typography from "../Typography";

export default function History(props) {
  let { className, image, text, orientation } = props;

  const classes = {
    root: [
      classNames(
        "History",
        { [`History--orientation-${orientation}`]: orientation },
        className
      )
    ],
    historyImage: [classNames("History-image")],
    historyText: [classNames("History-text")]
  };

  let { root, historyImage, historyText } = classes;

  return (
    <div className={root}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={historyImage}
      />
      <div className={historyText}>
        <Typography paragraph>{text}</Typography>
      </div>
    </div>
  );
}
