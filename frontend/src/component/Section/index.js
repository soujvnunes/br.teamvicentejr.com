import React from "react";
import Wrapper from "../Wrapper";
import classNames from "classnames";

export default function Section(props) {
  let { children, className } = props;
  const classes = { root: [classNames("Section", className)] };
  let { root } = classes;
  return (
    <section className={root}>
      <Wrapper>{children}</Wrapper>
    </section>
  );
}
