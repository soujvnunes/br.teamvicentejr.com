import React from "react";
import Wrapper from "../Wrapper";
import styled from "styled-components";
import As from "../../util/As";

const PanelRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  width: 100%;
  min-height: calc(var(--spacing) * 24px);
  padding: calc(var(--spacing) * 8px) 0;
  position: relative;
  background-image: url(${props => props.image});
`;

const PanelBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(var(--color-black), 0.5);
  transition: var(--transition);

  ${PanelRoot}:hover & {
    background-color: rgba(var(--color-black), 0.75);
  }
`;

export default function Panel(props) {
  let { className, image, children, href } = props;

  return (
    <PanelRoot className={className} image={image} href={href} {...As("a")}>
      <PanelBackdrop />
      <Wrapper>{children}</Wrapper>
    </PanelRoot>
  );
}
