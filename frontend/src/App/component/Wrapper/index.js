import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WrapperRoot = styled.div`
  flex: 1;
  max-width: calc(var(--viewport) * 1px);
  margin: 0 calc(var(--spacing) * 2px);
  position: relative;
  display: grid;
`;

export default function Wrapper(props) {
  let { children, ...other } = props;
  return <WrapperRoot {...other}>{children}</WrapperRoot>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};
