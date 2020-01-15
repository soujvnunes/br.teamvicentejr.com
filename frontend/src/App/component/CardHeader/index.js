import React from "react";
import styled from "styled-components";
import Typography from "../Typography";
import PropTypes from "prop-types";
import { down } from "styled-breakpoints";
import Icon from "../Icon";

const CardHeaderRoot = styled.header`
  padding: calc(var(--ds) * 1px);
  background-color: hsla(var(--ctd), 0.75);
`;

const CardHeaderSecondary = styled.div`
  display: inline-flex;

  ${down("md")} {
    align-items: center;
  }
`;

const CardHeaderSecondaryIcon = styled(Icon)`
  margin-right: calc(var(--ds) * 1px);
`;

export default function CardHeader(props) {
  let { primary, secondary, icon, ...other } = props;

  return (
    <CardHeaderRoot {...other}>
      <Typography variant={"heading"}>{primary}</Typography>
      <CardHeaderSecondary>
        <CardHeaderSecondaryIcon name={icon} />
        <Typography variant={"subject"}>{secondary}</Typography>
      </CardHeaderSecondary>
    </CardHeaderRoot>
  );
}

CardHeader.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  icon: PropTypes.string
};
