import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MainRoot = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function Main({ children, ...other }) {
  return (
    <MainRoot role={"main"} {...other}>
      {children}
    </MainRoot>
  );
}

Main.propTypes = {
  children: PropTypes.node
};
