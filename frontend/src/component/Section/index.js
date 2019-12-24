import React from "react";
import classNames from "classnames";

export default function Section(props) {
  let { children, className, id, wrap } = props;

  const classes = { root: [classNames("Section", className)] };

  let { root } = classes;

  const wrapped = (
    <>
      {wrap ? (
        <div className={"Section-wrapper"}>{children}</div>
      ) : (
        <>{children}</>
      )}
    </>
  );

  return (
    <section className={root} id={id}>
      {wrapped}
    </section>
  );
}
