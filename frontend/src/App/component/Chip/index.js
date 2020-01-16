import React from "react";
import Skew from "../Skew";
import Icon from "../Icon";
import styled from "styled-components";
import Typography from "../Typography";
import PropTypes from "prop-types";
import As from "../../util/Mixins/As";

const ChipRoot = styled.div`
  position: relative;
  display: inline-flex;
  padding: calc(var(--ds) * 1px);
  color: hsla(var(--ctb), 1);
  align-items: center;
`;

const ChipIcon = styled(Icon)`
  margin-right: calc(var(--ds) * 1px);
`;

export default function Chip(props) {
  let { icon, primary, href, ...other } = props;

  return (
    <ChipRoot {...other} href={href} {...As(`${href ? "a" : "div"}`)}>
      <Skew variant={"underlined"} />
      {icon && <ChipIcon name={icon} />}
      <Typography variant={"action"}>{primary}</Typography>
    </ChipRoot>
  );
}

Chip.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  primary: PropTypes.string.isRequired
};
