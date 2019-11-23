import React from "react";

export default props => (
  <nav className={`Nav ${props.className}`} children={props.children} />
);
