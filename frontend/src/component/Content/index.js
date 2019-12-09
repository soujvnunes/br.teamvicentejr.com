import React from "react";

export default props => {
  let { children } = props;
  return <div className={"Content"} children={children} />;
};
