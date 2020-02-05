import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const CardActionRoot = styled.footer`
  padding: calc(var(--ds) * 1px);

  ${props =>
    props.backdrop &&
    css`
      background-color: hsla(var(--ctd), 0.8);
    `};
`;

export default function CardAction(props) {
  let { children, ...other } = props;

  return <CardActionRoot {...other}>{children}</CardActionRoot>;
}

CardAction.propTypes = {
  children: PropTypes.any
};
