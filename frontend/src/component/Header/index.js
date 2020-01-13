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
  background-color: rgba(var(--color-black), 1);
  padding: calc(var(--spacing) * 14px) 0 calc(var(--spacing) * 2px) 0;
  min-height: ${props =>
    props.image ? "calc(var(--spacing) * 100px)" : "auto"};
  text-align: center;
  position: relative;
  box-shadow: inset 0 calc(var(--spacing) * -24px) calc(var(--spacing) * 8px)
    calc(var(--spacing) * -8px) rgba(var(--color-black), 0.75);

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}

  ${down("md")} {
    min-height: ${props =>
      props.image ? "calc(var(--spacing) * 75px)" : "auto"};
    padding-top: calc(var(--spacing) * 9px);
  }
`;

export default function Header(props) {
  let { className, image, title, subject } = props;

  return (
    <HeaderRoot image={image} className={className}>
      <Wrapper>
        <Typography variant={"title"}>{title}</Typography>
        <Typography variant={"subtitle"}>{subject}</Typography>
      </Wrapper>
    </HeaderRoot>
  );
}
