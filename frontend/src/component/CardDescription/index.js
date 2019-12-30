import React from "react";
import Typography from "../Typography";
import classNames from "classnames";

export default function CardDescription(props) {
  let { className, primary, secondary, children } = props;

  const classes = {
    root: [classNames("CardDescription", className)],
    header: [classNames("CardDescription-hgroup")],
    content: [classNames("CardDescription-content")]
  };

  let { root, header, content } = classes;

  return (
    <div className={root}>
      <hgroup className={header}>
        <Typography subject className={"CardDescription-hgroup-title"}>
          {primary}
        </Typography>
        <Typography paragraph className={"CardDescription-hgroup-secondary"}>
          {secondary}
        </Typography>
      </hgroup>
      {children && <div className={content}>{children}</div>}
    </div>
  );
}
