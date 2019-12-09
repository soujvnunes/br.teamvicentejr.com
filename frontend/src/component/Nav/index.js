import React from "react";

export default props => {
  let { className, children } = props;
  return <nav className={`Nav ${className}`} children={children} />;
};
