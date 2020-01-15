import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { down } from "styled-breakpoints";

const CardContentRoot = styled.div`
  overflow: hidden;
  transition: var(--a);
  transition-property: transform;
  padding: calc(var(--ds) * 1px);

  ${down("md")} {
    padding: calc(var(--ds) * 1px);
  }
`;

export default function CardContent(props) {
  let { children, ...other } = props;

  return <CardContentRoot {...other}>{children}</CardContentRoot>;
}

CardContent.propTypes = {
  children: PropTypes.array
};
