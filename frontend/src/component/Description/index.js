import React from "react";

export default props => {
  let { children } = props;

  return <article className={"Description"}>{children}</article>;
};
