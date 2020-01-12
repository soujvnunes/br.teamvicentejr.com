import React from "react";
import Skew from "../Skew";
import Icon from "../Icon";
import styled from "styled-components";
import Typography from "../Typography";
import PropTypes from "prop-types";

const ChipRoot = styled.div`
  position: relative;
  display: inline-block;
  margin: calc(var(--spacing) * 1px);
  padding: calc(var(--spacing) * 1px);
`;

const ChipContent = styled.div`
  display: flex;
  align-items: center;
`;

const ChipIcon = styled(Icon)`
  margin-right: calc(var(--spacing) * 1px);
`;

export default function Chip(props) {
  let { icon, primary, className } = props;

  return (
    <ChipRoot className={className}>
      <Skew variant={"underlined"} />
      <ChipContent>
        {icon && <ChipIcon name={icon} />}
        <Typography variant={"action"}>{primary}</Typography>
      </ChipContent>
    </ChipRoot>
  );
}

Chip.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  primary: PropTypes.string.isRequired
};
