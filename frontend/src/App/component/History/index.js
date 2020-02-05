import React from "react";
import Typography from "../Typography";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import PropTypes from "prop-types";

const HistoryRoot = styled.div`
  display: flex;
  flex-direction: row;

  ${down("tablet")} {
    flex-direction: column;
  }
`;

const HistoryImage = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  min-width: 50%;
  min-height: calc(var(--ds) * 43px);
  background-image: url(${props => props.image});
  border-radius: var(--sr);
`;

const HistoryText = styled(Typography)`
  text-align: justify;
  margin: 0 0 0 calc(var(--ds) * 2px);

  ${down("tablet")} {
    margin: calc(var(--ds) * 2px) 0 0 0;
  }
`;

export default function History({ image, title, text, ...other }) {
  return (
    <HistoryRoot {...other}>
      {image && <HistoryImage image={image} title={title} />}
      <HistoryText variant={"paragraph"}>{text}</HistoryText>
    </HistoryRoot>
  );
}

History.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};
