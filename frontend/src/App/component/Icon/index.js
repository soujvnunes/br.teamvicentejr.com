// tutorial used: https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/

import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Transition from "../../util/Mixins/Transition";
import { icon } from "../../lib/icon";

const IconRoot = styled.svg`
  width: calc(var(--ds) * 3px);
  height: calc(var(--ds) * 3px);
  fill: transparent;
  stroke: currentColor;
  display: inline-block;
  ${Transition("fill")}

  &:hover {
    fill: currentColor;
  }

  ${props =>
    props.variant === "active" &&
    css`
      fill: currentColor;
    `}
`;

const IconPath = styled.path`
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: calc(var(--ds) * 0.25px);
`;

export default function Icon({ name, variant, ...other }) {
  return (
    <IconRoot
      {...other}
      variant={variant}
      viewBox={"0 0 24 24"}
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
    >
      <title>{name}'s icon</title>
      <IconPath d={`${icon[name]}`} />
    </IconRoot>
  );
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    "home",
    "people",
    "local",
    "user",
    "phone",
    "calendar",
    "chevron",
    "chevrons",
    "add",
    "remove",
    "share",
    "maximize",
    "search",
    "locker",
    "view",
    "clock",
    "info",
    "cents",
    "youtube",
    "instagram"
  ]).isRequired,
  variant: PropTypes.oneOf(["default", "active"]).isRequired
};

Icon.defaultProps = {
  variant: "default"
};
