import React from "react";
import styled, { css } from "styled-components";
import Typography from "../Typography";
import PropTypes from "prop-types";
import Icon from "../Icon";

const CardHeaderRoot = styled.header`
  padding: calc(var(--ds) * 1px);

  ${props =>
    props.backdrop &&
    css`
      background-color: hsla(var(--ctd), 0.8);
    `};
`;

const CardHeaderSecondary = styled.div`
  display: flex;
  align-items: center;
`;

const CardHeaderSecondaryIcon = styled(Icon)`
  margin-right: calc(var(--ds) * 1px);
`;

export default function CardHeader(props) {
  let { primary, secondary, icon, backdrop, ...other } = props;

  return (
    <CardHeaderRoot backdrop={backdrop} {...other}>
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
