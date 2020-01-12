import React, { useState } from "react";
import classNames from "classnames";
import Skew from "../Skew";
import Button from "../Button";
import Typography from "../Typography";

export default function Line(props) {
  const [state, setState] = useState({
    expand: false
  });
  let { expand } = state;
  let { className, children, primary, secondary } = props;

  const classes = {
    root: [classNames("Line", className)],
    header: [classNames("Line-header")],
    content: [
      classNames("Line-content", {
        [`Line-content--expand`]: expand
      })
    ]
  };

  let { root, header, content } = classes;

  const handleExpand = () => {
    if (expand) setState({ ...state, expand: false });
    else setState({ ...state, expand: true });
  };

  return (
    <li className={root}>
      <div className={header}>
        <div className={"Line-header-info"}>
          <Typography variant={"heading"}>{primary}</Typography>
          <Typography variant={"subject"}>{secondary}</Typography>
        </div>
        <Skew variant={"outlined"} />
        <Button
          skew={false}
          className={"Line-header-button"}
          type={"large"}
          icon={expand ? "remove" : "add"}
          onClick={handleExpand}
          variant={"text"}
        />
      </div>
      <div className={content}>{children}</div>
    </li>
  );
}
