import React from "react";
import Skew from "../Skew";
import Icon from "../Icon";
import styled from "styled-components";
import Typography from "../Typography";
import PropTypes from "prop-types";

const ChipRoot = styled.div`
  position: relative;
  display: inline-block;
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
  let { icon, primary, ...other } = props;

  return (
    <ChipRoot {...other}>
      <Skew variant={"underlined"} />
      <ChipContent>
        {icon && <ChipIcon name={icon} />}
        <Typography variant={"action"}>{primary}</Typography>
      </ChipContent>
    </ChipRoot>
  );
}

Chip.propTypes = {
  icon: PropTypes.string,
  primary: PropTypes.string.isRequired
};
