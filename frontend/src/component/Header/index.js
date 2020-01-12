import React from "react";
import Wrapper from "../Wrapper";
import Typography from "../Typography";
import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";

const HeaderRoot = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  background-color: var(--color-black);
  padding: calc(var(--spacing) * 14px) 0 calc(var(--spacing) * 2px) 0;
  min-height: ${props =>
    props.image ? "calc(var(--spacing) * 100px)" : "auto"};
  text-align: center;
  position: relative;
  box-shadow: inset 0 calc(var(--spacing) * -24px) calc(var(--spacing) * 8)
    calc(var(--spacing) * -8px) var(--color-black);
  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}

  ${down("md")} {
    min-height: 50vh;
    padding-top: calc(var(--spacing) * 9px);
  }
`;

export default function Header(props) {
  let { image, title, subject } = props;

  return (
    <HeaderRoot image={image}>
      <Wrapper>
        <Typography variant={"title"}>{title}</Typography>
        <Typography variant={"subtitle"}>{subject}</Typography>
      </Wrapper>
    </HeaderRoot>
  );
}
