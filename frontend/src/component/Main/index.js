import React from "react";
import classNames from "classnames";

export default function Main(props) {
  let { children, className, id } = props;
  const classes = { root: [classNames("Main", className)] };
  let { root } = classes;
  return (
    <main role={"main"} className={root} id={id}>
      {children}
    </main>
  );
}
