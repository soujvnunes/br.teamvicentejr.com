import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WrapperRoot = styled.div`
  flex: 1;
  max-width: calc(var(--dv) * 1px);
  margin: 0 calc(var(--ds) * 2px);
  position: relative;
`;

export default function Wrapper(props) {
  let { children, ...other } = props;
  return <WrapperRoot {...other}>{children}</WrapperRoot>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};
