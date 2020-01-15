import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SectionRoot = styled.section`
  width: 100%;
  margin: calc(var(--ds) * 2px) 0;
  display: flex;
  justify-content: center;
`;

export default function Section(props) {
  let { children, ...other } = props;

  return <SectionRoot {...other}>{children}</SectionRoot>;
}

Section.propTypes = {
  children: PropTypes.node
};
