import React from "react";
import classNames from "classnames";

export default props => {
  let { children, indicator } = props;

  const classes = {
    root: [classNames("Nav")],
    bar: [classNames("Nav-bar")],
    runner: [
      classNames("Nav-bar-runner", {
        [`indicate-${indicator}-page`]: indicator
      })
    ]
  };

  let { root, bar, runner } = classes;

  return (
    <nav className={root}>
      <div className={bar}>
        <div className={runner} />
      </div>
      {children}
    </nav>
  );
};
