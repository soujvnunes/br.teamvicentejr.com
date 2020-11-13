import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";
import As from "../util/Mixins/As";

const Label = styled.span`
  display: block;
  word-wrap: break-word;

  ${props =>
    props.variant === "title" &&
    css`
      font-family: var(--tm);
      letter-spacing: calc(var(--ds) * 1px);
      font-size: calc(var(--ds) * 5px);
      color: hsla(var(--ctl), 1);

      ${down("tablet")} {
        font-size: calc(var(--ds) * 2px);
      }
    `}

  ${props =>
    (props.variant === "heading" || props.variant === "action") &&
    css`
      font-weight: bold;
      text-transform: uppercase;

      ${down("tablet")} {
        font-size: calc(var(--ds) * 1.75px);
      }
    `}
  
  ${props =>
    props.variant === "subtitle" &&
    css`
      font-size: calc(var(--ds) * 4px);

      ${down("tablet")} {
        font-size: calc(var(--ds) * 2px);
      }
    `}
  
  ${props =>
    props.variant === "heading" &&
    css`
      font-size: calc(var(--ds) * 2px);

      ${down("tablet")} {
        font-size: calc(var(--ds) * 1.5px);
      }
    `}
  
  ${props =>
    (props.variant === "subject" || props.variant === "action") &&
    css`
      font-size: calc(var(--ds) * 1.5px);
    `}
  
    ${props =>
      props.variant === "paragraph" &&
      css`
        margin-bottom: 0;
      `}
`;

export default function Typography({ variant, children, ...other }) {
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
