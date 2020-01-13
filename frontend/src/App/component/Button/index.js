import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { InputBase } from "../../util/InputBase";
import Icon from "../Icon";
import Skew from "../Skew";
import As from "../../util/As";

const ButtonRoot = styled.button`
  ${InputBase};

  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: calc(var(--spacing) * 6px);
  min-width: calc(var(--spacing) * 6px);
  padding: 0 calc(var(--spacing) * 2px);
`;

const ButtonLabel = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;

const ButtonIcon = styled(Icon)`
  & ~ ${ButtonLabel} {
    margin-left: calc(var(--spacing) * 2px);
  }
`;

export default function Button(props) {
  let { className, icon, id, label, onClick, variant, href, skew } = props;

  return (
    <ButtonRoot
      className={className}
      id={id}
      onClick={onClick}
      href={href}
      {...As(`${href ? "a" : "button"}`)}
    >
      {icon && <ButtonIcon name={icon} />}
      {label && <ButtonLabel>{label}</ButtonLabel>}
      {skew && <Skew variant={variant} />}
    </ButtonRoot>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  skew: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]).isRequired
};

Button.defaultProps = {
  variant: "text"
};
