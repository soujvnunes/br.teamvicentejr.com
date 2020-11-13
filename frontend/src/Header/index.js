import React from "react";
import Wrapper from "../Wrapper";
import Typography from "../Typography";
import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";
import PropTypes from "prop-types";

const HeaderRoot = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  background-color: ${props =>
    props.image ? "hsla(var(--ctd), 1)" : "transparent"};
  padding: calc(var(--ds) * 14px) 0 calc(var(--ds) * 2px) 0;
  min-height: ${props => (props.image ? "calc(var(--ds) * 100px)" : "auto")};
  text-align: center;
  position: relative;
  box-shadow: ${props =>
    props.image
      ? "inset 0 calc(var(--ds) * -24px) calc(var(--ds) * 8px) calc(var(--ds) * -8px) hsla(var(--ctd), 0.75)"
      : "none"};

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}

  ${down("tablet")} {
    min-height: ${props => (props.image ? "50vh" : "auto")};
    padding-top: calc(var(--ds) * 11px);
  }
`;

export default function Header({ image, title, subject, ...other }) {
  return (
    <HeaderRoot image={image} {...other}>
      <Wrapper>
        <Typography variant={"title"}>{title}</Typography>
        <Typography variant={"subtitle"}>{subject}</Typography>
      </Wrapper>
    </HeaderRoot>
  );
}

Header.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subject: PropTypes.string
};
