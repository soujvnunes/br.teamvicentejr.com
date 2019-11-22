import React from "react";

export default props => {
  if (props.link)
    return (
      <a
        className={["c-typography-a", props.className].join(" ")}
        href={props.href}
      >
        {props.children}
        <span className={"c-t-a-label"} children={props.label} />
      </a>
    );
  return null;
};
