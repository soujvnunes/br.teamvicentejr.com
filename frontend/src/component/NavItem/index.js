import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import Typography from "../Typography";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import { NavLinkDefault } from "../../util/NavLinkDefault";

const NavLinkRoot = styled(NavLink)`
  ${NavLinkDefault};

  position: relative;
  margin: 0 calc(var(--spacing) * 1px);
  min-width: calc(var(--spacing) * 10px);
  text-align: center;

  ${down("md")} {
    margin: 0;
    min-width: 25%;
    flex-direction: column;
  }
`;

const NavLinkLabel = styled(Typography)`
  font-size: calc(var(--spacing) * 1.25px);
  margin-top: calc(var(--spacing) * 0.5px);

  ${down("md")} {
    margin-top: calc(var(--spacing) * 1px);
  }
`;

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
    <NavLinkRoot
      to={to}
      isActive={isActive}
      className={"Nav-links-link Nav-link"}
      onClick={onClick}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      <Icon name={icon} variant={iconActive || hover ? "active" : "default"} />
      <NavLinkLabel variant={"action"}>{primary}</NavLinkLabel>
    </NavLinkRoot>
  );
}
