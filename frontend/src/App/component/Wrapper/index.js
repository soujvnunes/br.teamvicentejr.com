import React from "react";
import styled from "styled-components";

const WrapperRoot = styled.div`
  flex: 1;
  max-width: calc(var(--viewport) * 1px);
  margin: 0 calc(var(--spacing) * 2px);
  position: relative;
`;

export default function Wrapper(props) {
  let { children } = props;

  return <WrapperRoot {...props}>{children}</WrapperRoot>;
}
