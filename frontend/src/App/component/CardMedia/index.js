import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardMediaRoot = styled.img`
  width: 100%;
  height: auto;
`;

export default function CardMedia({ image, ...other }) {
  return <CardMediaRoot src={image} {...other} />;
}

CardMedia.propTypes = {
  image: PropTypes.string.isRequired
};
