import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { As } from "../helpers";

const CardRoot = styled.article`
  transition: var(--a);
  border-radius: var(--sr);
  background-color: hsla(var(--csl), 1);

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-position: center 40%;
      height: calc(var(--ds) * 40px);
      border-radius: var(--sr);

      ${props.zoom &&
        css`
          background-size: cover;
        `}
    `}

  &:hover {
    color: hsla(var(--ctl), 1);
  }
`;

export default function Card({ children, image, zoom, title, href, ...other }) {
  return (
    <CardRoot
      zoom={zoom}
      image={image}
      title={title}
      href={href}
      {...As(`${href ? "a" : "article"}`)}
      {...other}
    >
      {children}
    </CardRoot>
  );
}

Card.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  zoom: PropTypes.bool
};
