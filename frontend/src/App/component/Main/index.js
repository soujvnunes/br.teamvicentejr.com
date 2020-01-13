import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";

const MainRoot = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${down("md")} {
    margin-bottom: calc(var(--spacing) * 9px);
  }
`;

export default function Main(props) {
  let { children, className } = props;

  return (
    <MainRoot role={"main"} className={className}>
      {children}
    </MainRoot>
  );
}
