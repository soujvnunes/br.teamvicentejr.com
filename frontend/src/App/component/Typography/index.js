import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";
import As from "../../util/As";

const Label = styled.span`
  display: block;
  word-wrap: break-word;

  ${props =>
    props.variant === "title" &&
    css`
      font-family: var(--font-mono);
      letter-spacing: calc(var(--spacing) * 1px);
      font-size: calc(var(--spacing) * 5px);
      color: rgba(var(--color-tertiary-light), 1);

      ${down("md")} {
        font-size: calc(var(--spacing) * 2px);
      }
    `}

  ${props =>
    (props.variant === "heading" || props.variant === "action") &&
    css`
      font-weight: bold;
      text-transform: uppercase;

      ${down("md")} {
        font-size: calc(var(--spacing) * 1.75px);
      }
    `}
  
  ${props =>
    props.variant === "subtitle" &&
    css`
      font-size: calc(var(--spacing) * 4px);

      ${down("md")} {
        font-size: calc(var(--spacing) * 2px);
      }
    `}
  
  ${props =>
    (props.variant === "subject" || props.variant === "heading") &&
    css`
      font-size: calc(var(--spacing) * 2px);
      ${down("md")} {
        font-size: calc(var(--spacing) * 1.5px);
      }
    `}
  
  
  ${props =>
    props.variant === "action" &&
    css`
      font-size: calc(var(--spacing) * 1.5px);
      ${down("md")} {
        font-size: calc(var(--spacing) * 1.25px);
      }
    `}
`;

export default function Typography(props) {
  let { variant, children, ...other } = props;

  return (
    <Label
      {...other}
      variant={variant}
      {...As(
        `${(variant === "title" && "h1") ||
          (variant === "subtitle" && "h3") ||
          (variant === "heading" && "h5") ||
          (variant === "paragraph" && "p") ||
          "span"}`
      )}
    >
      {children}
    </Label>
  );
}

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "title",
    "subtitle",
    "paragraph",
    "heading",
    "subject",
    "action"
  ]).isRequired
};

Typography.defaultProps = {
  variant: "paragraph"
};
