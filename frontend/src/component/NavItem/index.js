import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import Typography from "../Typography";

export default function NavItem(props) {
  const [state, setState] = useState({
    hover: false
  });

  let { icon, isActive, primary, to, iconActive, onClick } = props;
  let { hover } = state;

  function handleHover() {
    if (hover) setState({ ...state, hover: false });
    else setState({ ...state, hover: true });
  }

  return (
    <NavLink
      to={to}
      isActive={isActive}
      className={"Nav-links-link Nav-link"}
      onClick={onClick}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      <Icon name={icon} variant={iconActive || hover ? "active" : "default"} />
      <Typography variant={"action"} className={"Nav-links-link-label"}>
        {primary}
      </Typography>
    </NavLink>
  );
}
