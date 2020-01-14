import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const SkewRoot = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: skewX(var(--stsX)) skewY(0deg);
  transition: var(--a);
  border-radius: var(--sr);

  ${props =>
    props.variant === "text" &&
    css`
      opacity: 0;
      background-color: currentColor;

      &:hover {
        opacity: 0.25;
      }

      &:active {
        opacity: 0.5;
      }
    `}
  
  ${props =>
    props.variant === "outlined" &&
    css`
      opacity: 0.25;
      border: var(--sb);

      &:hover {
        opacity: 1;
      }

      &:active {
        opacity: 0.5;
        background-color: currentColor;
      }
    `}

  ${props =>
    props.variant === "contained" &&
    css`
      opacity: 0.25;
      background-color: currentColor;

      &:hover {
        opacity: 0.5;
      }

      &:active {
        opacity: 0.75;
      }
    `}
  
  ${props =>
    props.variant === "underlined" &&
    css`
      background-color: currentColor;
      height: calc(var(--ds) * 0.25px);
      top: auto;
    `}
  
  ${props =>
    props.variant === "static" &&
    css`
      background-color: currentColor;
    `}
`;

export default function Skew(props) {
  let { variant, ...other } = props;
  return <SkewRoot {...other} variant={variant} />;
}

Skew.propTypes = {
  variant: PropTypes.oneOf([
    "text",
    "outlined",
    "contained",
    "underlined",
    "static"
  ]).isRequired
};

Skew.defaultProps = {
  variant: "text"
};
