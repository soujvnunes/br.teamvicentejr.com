import React from "react";
import Wrapper from "../Wrapper";
import styled from "styled-components";
import As from "../../util/Mixins/As";
import PropTypes from "prop-types";

const PanelRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  width: 100%;
  min-height: calc(var(--ds) * 24px);
  padding: calc(var(--ds) * 8px) 0;
  position: relative;
  background-image: url(${props => props.image});
`;

const PanelBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(var(--ctd), 0.5);
  transition: var(--a);

  ${PanelRoot}:hover & {
    background-color: hsla(var(--ctd), 0.75);
  }
`;

export default function Panel(props) {
  let { image, children, href, ...other } = props;

  return (
    <PanelRoot
      {...other}
      image={image}
      href={href}
      {...As(`${href ? "a" : "div"}`)}
    >
      <PanelBackdrop />
      <Wrapper>{children}</Wrapper>
    </PanelRoot>
  );
}

Panel.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
  href: PropTypes.string
};
