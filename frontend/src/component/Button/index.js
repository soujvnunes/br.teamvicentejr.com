import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { InputBase } from "../../util/InputBase";
import Icon from "../Icon";
import Skew from "../Skew";
import as from "../../util/as";

const Root = styled.button`
  ${InputBase};
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: calc(var(--spacing) * 6px);
  min-width: calc(var(--spacing) * 6px);
  padding: 0 calc(var(--spacing) * 2px);
`;

const IconStyled = styled(Icon)`
  & ~ span {
    margin-left: calc(var(--spacing) * 2px);
  }
`;

const Label = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;

export default function Button(props) {
  let { icon, id, label, onClick, variant, className, href } = props;

  return (
    <Root
      id={id}
      onClick={onClick}
      className={className}
      href={href}
      {...as("a")}
    >
      {icon && <IconStyled name={icon} />}
      {label && <Label>{label}</Label>}
      <Skew variant={variant} />
    </Root>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  skew: PropTypes.bool,
  variant: PropTypes.oneOf([true, "outlined", "contained"])
};
