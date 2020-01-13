import React from "react";
import Wrapper from "../Wrapper";
import styled from "styled-components";

const SectionRoot = styled.section`
  width: 100%;
  margin: calc(var(--spacing) * 2px) 0;
  display: flex;
  justify-content: center;
`;

export default function Section(props) {
  let { children, className } = props;

  return (
    <SectionRoot className={className}>
      <Wrapper>{children}</Wrapper>
    </SectionRoot>
  );
}
