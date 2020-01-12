import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Label = styled.span`
  display: block;
  word-wrap: break-word;

  ${props =>
    props.variant === "title" &&
    css`
      font-family: var(--font-mono);
      letter-spacing: calc(var(--spacing) * 1px);
      font-size: calc(var(--spacing) * 5px);
    `}

  ${props =>
    (props.variant === "heading" || props.variant === "action") &&
    css`
      font-weight: bold;
      text-transform: uppercase;
    `}
  
  ${props =>
    props.variant === "subtitle" &&
    css`
      font-size: calc(var(--spacing) * 4px);
    `}
  
  ${props =>
    (props.variant === "subject" || props.variant === "heading") &&
    css`
      font-size: calc(var(--spacing) * 2px);
    `}
  
  
  ${props =>
    props.variant === "action" &&
    css`
      font-size: calc(var(--spacing) * 1.5px);
    `}
`;

export default function Typography(props) {
  let { variant, children } = props;

  if (variant === "title")
    return (
      <Label as={"h1"} variant={variant}>
        {children}
      </Label>
    );
  else if (variant === "subtitle")
    return (
      <Label as={"h3"} variant={variant}>
        {children}
      </Label>
    );
  else if (variant === "paragraph")
    return (
      <Label as={"p"} variant={variant}>
        {children}
      </Label>
    );
  else if (variant === "heading")
    return (
      <Label as={"h5"} variant={variant}>
        {children}
      </Label>
    );
  else if (variant === "subject")
    return <Label variant={variant}>{children}</Label>;
  else if (variant === "action")
    return <Label variant={variant}>{children}</Label>;
}

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
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
