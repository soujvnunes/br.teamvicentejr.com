import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import PropTypes from "prop-types";

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
  let { children, ...other } = props;

  return (
    <MainRoot role={"main"} {...other}>
      {children}
    </MainRoot>
  );
}

Main.propTypes = {
  children: PropTypes.node
};
