import React from "react";
import styled, { css } from "styled-components";
import Typography from "../Typography";
import PropTypes from "prop-types";
import As from "../../util/As";

const CardRoot = styled.article`
  border: var(--border);
  border-radius: var(--radius);
  margin: calc(var(--spacing) * 2px) 0;
  transition: var(--transition);

  &:hover {
    color: var(--color-primary-light);
  }
`;

const CardHeader = styled.header`
  padding: calc(var(--spacing) * 2px);
`;

const CardContent = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: calc(var(--spacing) * 2px);

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-position: center;
      height: calc(var(--spacing) * 30px);
      border-radius: var(--radius);
    `};
`;

const CardAction = styled.div`
  padding: calc(var(--spacing) * 2px);
`;

export default function Card(props) {
  let {
    className,
    children,
    primary,
    secondary,
    actions,
    image,
    title,
    href
  } = props;

  return (
    <CardRoot className={className}>
      <CardHeader>
        <Typography variant={"heading"}>{primary}</Typography>
        <Typography variant={"subject"}>{secondary}</Typography>
      </CardHeader>
      <CardContent href={href} {...As("a")} image={image} title={title}>
        {children}
      </CardContent>
      {actions && <CardAction>{actions}</CardAction>}
    </CardRoot>
  );
}

Card.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  actions: PropTypes.node,
  children: PropTypes.element,
  title: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};
