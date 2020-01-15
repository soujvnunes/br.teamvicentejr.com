import React from "react";
import styled from "styled-components";
import Wrapper from "../../component/Wrapper";
import { down } from "styled-breakpoints";
import PropTypes from "prop-types";

const CardSetRoot = styled(Wrapper)`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  ${down("md")} {
    grid-template-columns: 100% !important;
  }
`;

export default function CardSet(props) {
  let { children, ...other } = props;
  return <CardSetRoot {...other}>{children}</CardSetRoot>;
}

CardSet.propTypes = {
  children: PropTypes.any.isRequired
};
