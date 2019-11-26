import React from "react";
import classNames from "classnames";

export default props => {
  const className = classNames("LineSet", props.className);

  return <ul className={className} children={props.children} />;
};
