import React from "react";
import styled, { css } from "styled-components";
import Typography from "../Typography";
import PropTypes from "prop-types";
import As from "../../util/As";
import { down } from "styled-breakpoints";

const CardRoot = styled.article`
  border: var(--sb);
  border-radius: var(--sr);
  transition: var(--a);

  &:hover {
    color: rgba(var(--cpl), 1);
  }
`;

const CardHeader = styled.header`
  padding: calc(var(--ds) * 2px);

  ${down("md")} {
    padding: calc(var(--ds) * 1px);
  }
`;

const CardContent = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: calc(var(--ds) * 2px);

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-position: center;
      height: calc(var(--ds) * 30px);
      border-radius: var(--sr);
    `};

  ${down("md")} {
    margin: calc(var(--ds) * 1px);
  }
`;

const CardAction = styled.div`
  padding: calc(var(--ds) * 2px);
`;

export default function Card(props) {
  let {
    children,
    primary,
    secondary,
    actions,
    image,
    title,
    href,
    ...other
  } = props;

  return (
    <CardRoot {...other}>
      <CardHeader>
        <Typography variant={"heading"}>{primary}</Typography>
        <Typography variant={"subject"}>{secondary}</Typography>
      </CardHeader>
      <CardContent
        image={image}
        title={title}
        href={href}
        {...As(`${href ? "a" : "div"}`)}
      >
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
  href: PropTypes.string
};
