import React from "react";
import Icon from "../Icon";
import Skew from "../Skew";
import styled from "styled-components";

const Root = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.theme.spacing(6)};
  min-width: ${props => props.theme.spacing(6)};
  padding: 0 ${props => props.theme.spacing(2)};
  color: ${props => props.theme.color("text")};

  &:hover {
    color: ${props => props.theme.color("text.light")};
  }
`;

const IconStyled = styled(Icon)`
  margin-right: ${props => props.theme.spacing(2)};
`;

const Label = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;

export default function Button(props) {
  let { icon, id, label, onClick, skew } = props;
  let { hover } = state;

  return (
    <Root id={id} onClick={onClick}>
      {icon && <IconStyled name={icon} active={hover} />}
      {label && <Label>{label}</Label>}
      {skew && <Skew variant={"outlined"} />}
    </Root>
  );
}
