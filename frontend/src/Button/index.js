import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import InputBase from "../util/Mixins/InputBase";
import Icon from "../Icon";
import Skew from "../Skew";
import As from "../util/Mixins/As";

const ButtonRoot = styled.button`
  ${InputBase};

  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: calc(var(--ds) * 6px);
  min-width: calc(var(--ds) * 6px);
  padding: 0 calc(var(--ds) * 2px);
`;

const ButtonLabel = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;

const ButtonIcon = styled(Icon)`
  & ~ ${ButtonLabel} {
    margin-left: calc(var(--ds) * 2px);
  }
`;

export default function Button({ icon, label, variant, href, skew, ...other }) {
  return (
    <ButtonRoot {...other} href={href} {...As(`${href ? "a" : "button"}`)}>
      {icon && <ButtonIcon name={icon} />}
      {label && <ButtonLabel>{label}</ButtonLabel>}
      {skew && <Skew variant={variant} />}
    </ButtonRoot>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]).isRequired,
  href: PropTypes.string,
  skew: PropTypes.bool.isRequired
};

Button.defaultProps = {
  variant: "text"
};
