import React from "react";
import classNames from "classnames";

export default props => {
  let { className, children, indicator } = props;

  const classes = {
    root: [classNames("Nav" /*, { [`class`]: prop }*/, className)]
  };

  let { root } = classes;

  return (
    <nav className={root}>
      <div className={`${root}-indicator ${indicator}`}>
        <div className={`${root}-indicator-bar`} />
      </div>
      {children}
    </nav>
  );
};
