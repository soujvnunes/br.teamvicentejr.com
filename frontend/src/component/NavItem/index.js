import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";

export default function NavItem(props) {
  const [state, setState] = useState({
    hover: false
  });

  let { icon, active, primary } = props;
  let { hover } = state;

  function handleHover() {
    if (hover) setState({ ...state, hover: false });
    else setState({ ...state, hover: true });
  }

  return (
    <NavLink
      {...props}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      <Icon name={icon} active={active || hover} />
      <span className={"Nav-links-link-label"}>{primary}</span>
    </NavLink>
  );
}
