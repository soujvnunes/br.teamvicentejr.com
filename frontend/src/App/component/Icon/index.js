// tutorial used: https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/

import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const IconRoot = styled.svg`
  transition: var(--transition);
  width: calc(var(--spacing) * 3px);
  height: calc(var(--spacing) * 3px);
  fill: transparent;
  stroke: currentColor;

  &:hover {
    fill: currentColor;
  }

  ${props =>
    props.variant === "active" &&
    css`
      fill: currentColor;
    `}
`;

export default function Icon(props) {
  let { name, variant, ...other } = props;

  return (
    <IconRoot
      {...other}
      variant={variant}
      viewBox={"0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>{name}'s icon</title>
      <use xlinkHref={`#icon_${name}`} />
    </IconRoot>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "active"]).isRequired
};

Icon.defaultProps = {
  variant: "default"
};
